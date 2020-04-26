import React from "react";
import { connect } from "react-redux";
import EditContact from "./EditContact";
import ContactList from "./ContactList";

const List = ({ data: { contacts }, filteredContact, currentUser: { userId } }) => {

  const contactDetail = contacts.filter(contact => contact.userId === userId);

  const contactList = filteredContact.length > 0 ? filteredContact : contactDetail;

  return (
    <div>
      {
        userId ? (
          <div className="details">
            <h4>Basic info </h4>
            <h4>Company</h4>
          </div>
        ) : null
      }
      {contactList.map((contact) => (
        <div key={contact.contactId}>
          {contact.isEdit ? (
            <EditContact contact={contact} key={contact.contactId} />
          ) : (
            <div>
              <ContactList key={contact.contactId} contacts={contact} />
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
    filteredContact: state.filteredContact,
     currentUser: state.selectedUser,
  };
};
export default connect(mapStateToProps)(List);
