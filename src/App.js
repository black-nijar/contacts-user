import React from "react";
import User from "./components/User";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <div className='ui container'>
      <CreateUser />
      <User />
    </div>
  );
}

export default App;
