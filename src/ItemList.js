import React from 'react';
import { Link } from "react-router-dom";


/**
 * Renders a main list of items including links to their detail pages.
 * Renders each item's Id after name => -The Force Awakens7
 * @param {Array} items list of objects {id,url,name}
 * @param {String} title title to be displayed upon render
 */
function ItemList({items, title}) {
  return (
    <>
      <h1 className="my-3">{title}</h1>
      {items.length !== 0
        ? (
          <ul style={{ fontSize: "120%" }}>
            {items.map(item =>
              <li key={item.id}>
                <Link to={item.url}>
                  {item.name}{" "}
                  <small className="text-muted">{item.id}</small>
                </Link>
              </li>
            )}
          </ul>
        )
        : <p>You haven't explored any items of this type yet.</p>
      }
    </>
  );
}



export default ItemList;
