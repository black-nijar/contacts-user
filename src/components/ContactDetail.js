import React from "react";
import { connect } from "react-redux";

const ContactDetail = ({ contact: { selectedContact } }) => {
  const dummy = [];
  const detail = selectedContact ? selectedContact : dummy;
  const list =
    detail.length > 0
      ? detail.map((contact) => {
          return (
            <div className="detail">
              <span>Full name :{contact.contactName}</span>
              <span>Email Id :{contact.emailId}</span>
              <span>Phone No : {contact.phoneNumber}</span>
              <span>Company :{contact.company}</span>
              <span>Address :{contact.address}</span>
            </div>
          );
        })
      : "No Contact selected";
  return (
    <div>
      <h5>Contact Detail</h5>
      {list}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contact: state.contactDetail,
  };
};
export default connect(mapStateToProps)(ContactDetail);
