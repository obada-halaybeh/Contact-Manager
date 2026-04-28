import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import ContactForm from "./component/ContactForm";
import List from "./component/List";
import "./App.css";

function App() {
  const [contact, setcontact] = useState([]);

  function addContact(newContact) {
    setcontact(...contact, newContact);
  }

  function deleteContact() {}

  console.log(contact);

  return (
    <>
      <h1> contact manager</h1>
      <ContactForm addContact={addContact} />
      <List contact={contact} />

      {/* <List deleteContact={deleteContact} /> */}
    </>
  );
}

export default App;
