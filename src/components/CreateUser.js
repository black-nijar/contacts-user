import React, { Component } from "react";
import { connect } from 'react-redux';
import { createUser } from '../actions/actions';

export class CreateUser extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let userName = this.getUser.value;
    let userId = new Date().getTime();
    console.log("user", userName, userId);
    const userData = {
      userId, userName
    };
    this.props.createUser(userData);
    this.getUser.value = "";
  };
  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="field">
            <label htmlFor="user">Create a User</label>
            <input
              type="text"
              placeholder="Username"
              ref={(input) => (this.getUser = input)}
            />
          </div>
          <button className="ui button" type='submit'>Create User</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { createUser })(CreateUser);
