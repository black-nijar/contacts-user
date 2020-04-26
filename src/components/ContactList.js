import React from "react";
import { connect } from "react-redux";
import { editContact, contactDetail } from "../actions/actions";

const ContactList = ({ contacts, editContact, contactDetail, data }) => {
  const { contactId, contactName, company } = contacts;
  console.log("CON", contacts);
  return (
    <div className="card">
      <div className="contacts" onClick={() => contactDetail(contactId, data)}>
        <div className="contactDetail">
          <h5 className="contactName">{contactName}</h5>
        </div>
        <h5 className="company">{company}</h5>
      </div>
      <button
        type="submit"
        className="btn btn-secondary"
        onClick={() => editContact(contactId)}
      >
        Edit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data.contacts,
  };
};

export default connect(mapStateToProps, { editContact, contactDetail })(
  ContactList
);
