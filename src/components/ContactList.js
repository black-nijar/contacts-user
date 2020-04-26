import React from "react";
import { connect } from "react-redux";
import { editContact } from "../actions/actions";

const ContactList = ({ contacts, index, editContact }) => {
  const {
    contactId,
    contactName,
    emailId,
    phoneNumber,
    company,
    address,
  } = contacts;
  
  return (
    <div className="list">
      <h4 style={{ marginTop: "25px" }} className="index">
        {index + 1}
      </h4>
      <div className="contactDetail">
        <h4 style={{ marginTop: "25px" }} className="contactName">
          {contactName}
        </h4>
      </div>
      <h4 className="company">{company}</h4>
      <button type="submit" className="ui button" onClick={() => editContact(contactId)}>
           Edit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps, { editContact })(ContactList);
