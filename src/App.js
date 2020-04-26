import React from "react";
import User from "./components/User";
import CreateUser from "./components/CreateUser";
import AddContact from "./components/AddContact";
import List from "./components/List";
import "./App.css";
import SearchContact from "./components/SearchContact";
import ContactDetail from "./components/ContactDetail";

function App() {
  return (
    <div className="container">
      <div className="displayContacts">
        <div>
          <CreateUser />
          <br/>
          <User />
          <AddContact />
          <SearchContact />
          <List />
        </div>
        <div>
          <ContactDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
