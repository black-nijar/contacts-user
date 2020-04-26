import React from "react";
import { connect } from "react-redux";
import { editContact, contactDetail } from "../actions/actions";

const ContactList = ({ contacts, editContact }) => {
  const { contactId, contactName, company } = contacts;

  return (
    <div>
      <div className="card" onClick={() => contactDetail(contactId)}>
        <div className="contactDetail">
          <h4 className="contactName">{contactName}</h4>
        </div>
        <h4 className="company">{company}</h4>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={() => editContact(contactId)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};


export default connect(null, { editContact, contactDetail })(
  ContactList
);