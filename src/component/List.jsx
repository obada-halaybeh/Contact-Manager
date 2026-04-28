import React from "react";
import Item from "./Item";
import "./List.css";

function List({ contact, deleteContact }) {
  return (
    <div>
      <h2> contact list </h2>
      {contact.length === 0 ? (
        <p> no contacts.</p>
      ) : (
        <ul>
          {contact.map((data, index) => (
            <Item
              key={index}
              contact={data}
              index={index}
              deleteContact={deleteContact}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
