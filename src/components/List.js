import React from "react";
import { connect } from "react-redux";
import EditContact from "./EditContact";
import ContactList from "./ContactList";

const List = ({ data: { contacts } }) => {
  return (
    <div>
      <div className="details">
        <h4 style={{ marginTop: "25px" }}>Basic info </h4>
        <h4>Company</h4>
      </div>
      {contacts.map((contact, i) => (
        <div key={contact.contactId}>
          {contact.isEdit ? (
            <EditContact contact={contact} key={contact.contactId} />
          ) : (
            <div>
              <ContactList
                index={i}
                key={contact.contactId}
                contacts={contact}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps)(List);
