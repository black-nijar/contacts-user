import React from "react";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import AddContact from "./components/AddContact";
import List from "./components/List";
import './App.css'
import SearchContact from "./components/SearchContact";

function App() {
  return (
    <div className="ui container">
      <CreateUser />
      <User />
      <AddContact />
      <SearchContact/>
      <List />
    </div>
  );
}

export default App;
