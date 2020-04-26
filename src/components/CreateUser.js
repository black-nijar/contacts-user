import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../actions/actions";
import UserModal from "./UserModal";

export class CreateUser extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let userName = this.getUser.value;
    let userId = new Date().getTime();
    const userData = {
      userId,
      userName,
    };
    this.props.createUser(userData);
    this.getUser.value = "";
    this.hideModal();
  };
  render() {
    return (
      <main>
        <UserModal show={this.state.show}>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div className="field">
              <label htmlFor="user">Create a User :</label>
              <input
                autoFocus={true}
                type="text"
                placeholder="Username"
                className="form-control"
                ref={(input) => (this.getUser = input)}
                required
              />
            </div>
            <br />
            <div className="btn-group">
              <div>
                <button className="btn btn-primary">Create user</button>
              </div>
              <div style={{ paddingLeft: 30 }}>
                <button
                  type="button"
                  className="btn danger"
                  onClick={() => this.hideModal()}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </UserModal>
        <div
          style={{ textAlign: "center", display: "flex", flexDirection: "row" }}
        >
          <h4>Click here to </h4>
          <button
            type="button"
            onClick={this.showModal}
            className="btn btn-primary"
          >
            Create user
          </button>
        </div>
      </main>
    );
  }
}

export default connect(null, { createUser })(CreateUser);
