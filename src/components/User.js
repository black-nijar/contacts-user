import React from "react";
import { connect } from "react-redux";
import { selectedUser } from "../actions/actions";

const User = ({ rootUsers: { users }, selectedUser }) => {
  const handleChange = (e) => {
    const currentUser = users.filter(
      (user) => user.userName === e.target.value
    );
    for (let key in currentUser) {
      let userName = currentUser[key].userName;
      let userId = currentUser[key].userId;
      let userDetail = {
        userName,
        userId,
      };
      selectedUser(userDetail);
    }
  };
  return (
    <div>
      <h4>Current User </h4>
      {/* <select onChange={handleChange}>
        {users.map((user) => (
          <option key={user.userId}>{user.userName}</option>
        ))}
      </select> */}
      {users.map((user) => user.userName).length > 0 ? (
        <select onChange={handleChange}>
          {users.map((user) => (
            <option key={user.userId}>{user.userName}</option>
          ))}
        </select>
      ) : (
        "No one"
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    rootUsers: state.rootUsers,
  };
};

export default connect(mapStateToProps, { selectedUser })(User);
