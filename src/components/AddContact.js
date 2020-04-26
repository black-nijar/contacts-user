import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions/actions";

export class AddContact extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let contactName = this.name.value;
    let emailId = this.emailId.value;
    let phoneNumber = this.number.value;
    let address = this.address.value;
    let company = this.company.value;
    let contactId = new Date().getTime();
    let contactDetail = {
      contactName,
      emailId,
      phoneNumber,
      address,
      company,
      contactId,
      isEdit: false
    };
    this.props.addContact(contactDetail);
    this.name.value = "";
    this.emailId.value = "";
    this.number.value = "";
    this.address.value = "";
    this.company.value = ""
  };
  render() {
    return (
      <div>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="full Name">Full name :</label>
            <input
              type="text"
              placeholder="Contact name"
              ref={(input) => (this.name = input)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="Email ID"
              ref={(input) => (this.emailId = input)}
              required
            />
          </div>
          <div>
            <label htmlFor="number">Phone Number :</label>
            <input
              type="number"
              placeholder="Phone number"
              ref={(input) => (this.number = input)}
              required
            />
          </div>
          <div>
            <label htmlFor="company">Company :</label>
            <input
              type="text"
              placeholder="Company"
              ref={(input) => (this.company = input)}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address :</label>
            <input
              type="text"
              placeholder="Contact"
              ref={(input) => (this.address = input)}
              required
            />
          </div>
          <br />
          <button type="submit" className="ui button">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addContact })(AddContact);
