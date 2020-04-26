import React from "react";
import { connect } from "react-redux";

const ContactDetail = ({
  contact: { selectedContact },
  currentUser: { userId },
}) => {
  const dummy = [];
  const detail = selectedContact ? selectedContact : dummy;
  const list =
    detail.length > 0
      ? detail.map((contact) => {
          return (
            <div className="detail">
              <div
                style={{
                  textAlign: "center",
                  backgroundColor: "pink",
                  borderRadius: "30px",
                }}
              >
                {contact.contactName.charAt(0)}
              </div>
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
      {userId ? (
        <div>
          <h5>Contact Detail</h5>
          {list}
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contact: state.contactDetail,
    currentUser: state.selectedUser,
  };
};
export default connect(mapStateToProps)(ContactDetail);
