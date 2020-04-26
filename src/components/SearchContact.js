import React from "react";
import { connect } from "react-redux";
import { searchContact } from "../actions/actions";

const SearchContact = ({
  searchContact,
  data: { contacts },
  currentUser: { userId },
}) => {
  return (
    <div className="search">
      {userId ? (
        <form className="form">
          <div>
            <label htmlFor="searchContact">Search Contact</label>
            <input
              className="form-control"
              type="text"
              placeholder="Search by name"
              onChange={(e) => searchContact(e.target.value, contacts)}
            />
          </div>
        </form>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.data,
    currentUser: state.selectedUser,
  };
};
export default connect(mapStateToProps, { searchContact })(SearchContact);
