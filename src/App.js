import React from "react";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import AddContact from "./components/AddContact";
import List from "./components/List";
import './App.css'

function App() {
  return (
    <div className="ui container">
      <CreateUser />
      <User />
      <AddContact />
      <List />
    </div>
  );
}

export default App;
