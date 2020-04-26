import React, { Component } from "react";
import { connect } from "react-redux";
import { addContact } from "../actions/actions";
import Modal from "./Modal";

export class AddContact extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
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
      isEdit: false,
    };
    this.props.addContact(contactDetail);
    this.name.value = "";
    this.emailId.value = "";
    this.number.value = "";
    this.address.value = "";
    this.company.value = "";
    this.hideModal();
  };
  render() {
    return (
      <main>
        <Modal show={this.state.show}>
          <form className="ui form" onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="full Name">Full name :</label>
              <input
                type="text"
                placeholder="Contact name"
                ref={(input) => (this.name = input)}
                className="form-control"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                placeholder="Email ID"
                ref={(input) => (this.emailId = input)}
                className="form-control"
                required
              />
            </div>
            <div>
              <label htmlFor="number">Phone Number :</label>
              <input
                type="number"
                placeholder="Phone number"
                ref={(input) => (this.number = input)}
                className="form-control"
                required
              />
            </div>
            <div>
              <label htmlFor="company">Company :</label>
              <input
                type="text"
                placeholder="Company"
                ref={(input) => (this.company = input)}
                className="form-control"
                required
              />
            </div>
            <div>
              <label htmlFor="address">Address :</label>
              <input
                type="text"
                placeholder="Contact"
                ref={(input) => (this.address = input)}
                className="form-control"
                required
              />
            </div>
            <br />
           
            <div className="btn-group">
            
              <div>
                <button className="btn btn-primary">Add Contact</button>
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
        </Modal>
        <div style={{ textAlign: "center" }}>
         <h4>Click here to Add Contact</h4>
          <button
            type="button"
            onClick={this.showModal}
            className="btn btn-primary"
          >
            Add Contact
          </button>
        </div>
      </main>
    );
  }
}

export default connect(null, { addContact })(AddContact);
