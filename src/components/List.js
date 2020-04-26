import React from "react";
import { connect } from "react-redux";
import EditContact from "./EditContact";
import ContactList from "./ContactList";

const List = ({ data: { contacts }, filteredContact }) => {
  const contactList = filteredContact.length > 0  ? filteredContact : contacts
  return (
    <div>
      <div className="details">
        <h4 >Basic info </h4>
        <h4>Company</h4>
      </div>
      {contactList.map((contact, i) => (
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
    filteredContact: state.filteredContact
  };
};
export default connect(mapStateToProps)(List);
