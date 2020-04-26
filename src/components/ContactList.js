import React from "react";
import { connect } from "react-redux";
import { editContact, contactDetail } from "../actions/actions";

const ContactList = ({ contacts, editContact, contactDetail, data }) => {
  const { contactId, contactName, company } = contacts;

  return (
    <div className="card" style={{ marginTop: "10px" }}>
      <div className="contacts" onClick={() => contactDetail(contactId, data)}>
        <div className="contactDetail">
          <h5 className="contactName">{contactName}</h5>
        </div>
        <div className="vertical-divider"></div>
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
