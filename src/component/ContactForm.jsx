import React, { useState } from "react";
import "./form.css";

export default function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  let handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name,
      email,
    };
    addContact(newContact);

    setName("");
    setEmail("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit"> add </button>
      </form>
    </div>
  );
}
