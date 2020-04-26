import React from "react";
import { connect } from "react-redux";
import { selectedUser } from "../actions/actions";

const User = () => {
  return (
    <div>
      {/* <h4>Current User </h4>
      {users.map((user) => user.userName).length > 0 ? (
        <select onChange={(e) => selectedUser(e.target.value)}>
          {users.map((user) => (
            <option key={user.userId}>{user.userName}</option>
          ))}
        </select>
      ) : "No one"} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps, { selectedUser })(User);
