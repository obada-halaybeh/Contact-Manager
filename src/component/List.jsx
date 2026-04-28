import React from "react";

function List({ contact }) {
  return (
    <div>
      <ul>
        {contact.map((data, index) => {
          return (
            <li key={index}>
              name: {contact.name} email: {contact.email}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
