import React, { Component } from "react";
import { connect } from "react-redux";
import { updateContact } from "../actions/actions";

export class EditContact extends Component {
  handleSubmit = (e) => {
  
    e.preventDefault();
    let newContactName = this.name.value;
    let newEmailId = this.emailId.value;
    let newPhoneNumber = this.number.value;
    let newAddress = this.address.value;
    let newCompany = this.company.value;
    let contactId = this.props.contact.contactId;
    let contactDetail = {
      newContactName,
      newEmailId,
      newPhoneNumber,
      newAddress,
      newCompany,
      contactId,
    };
    this.props.updateContact(contactDetail);
  };
  render() {
    const {
      contact: {
        contactName,
        emailId,
        phoneNumber,
        company,
        address,
      },
    } = this.props;
    return (
      <div className="form">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="full Name">Full name :</label>
            <input
              defaultValue={contactName}
              type="text"
              placeholder="Contact name"
              ref={(input) => (this.name = input)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input
              defaultValue={emailId}
              type="email"
              placeholder="Email ID"
              ref={(input) => (this.emailId = input)}
              required
            />
          </div>
          <div>
            <label htmlFor="number">Phone Number :</label>
            <input
              defaultValue={phoneNumber}
              type="number"
              placeholder="Phone number"
              ref={(input) => (this.number = input)}
              required
            />
          </div>
          <div>
            <label htmlFor="company">Company :</label>
            <input
              defaultValue={company}
              type="text"
              placeholder="Company"
              ref={(input) => (this.company = input)}
              required
            />
          </div>
          <div>
            <label htmlFor="address">Address :</label>
            <input
              defaultValue={address}
              type="text"
              placeholder="Contact"
              ref={(input) => (this.address = input)}
              required
            />
          </div>
          <br />
          <button type="submit" className="ui button">
            Update Contact
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { updateContact })(EditContact);
