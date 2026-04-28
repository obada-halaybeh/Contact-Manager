import React from "react";
import "./Item.css";

function Item({ index, contact, deleteContact }) {
  return (
    <li>
      <strong>
        {" "}
        {index + 1}. {contact.name}{" "}
      </strong>{" "}
      - {contact.email}
      <button onClick={() => deleteContact(index)}> Delete </button>
    </li>
  );
}

export default Item;
