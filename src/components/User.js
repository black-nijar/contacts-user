import React from "react";
import { connect } from "react-redux";

const User = ({ data: { users } }) => {
  console.log("data", users);
  return (
    <div>
      <h4>Current User </h4>
      {users.map((user) => user.userName).length > 0 ? (
        <select>
          {users.map((user) => (
            <option key={user.userId}>{user.userName}</option>
          ))}
        </select>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
export default connect(mapStateToProps)(User);
