import React from 'react';
import { Link } from "react-router-dom";

/**
 * Displays a secondary list of items, with sub-section header
 * @param {String} title title to be displayed in header of list view
 * @param {Array} items list of items {id,url,display}
 */
function Sublist({title, items}) {
  return (
    <>
      <h3>{ title }</h3>
      <ul>
        {items.map(item =>
          <li key={item.id}><Link to={item.url}>{item.display}</Link></li>
        )}
      </ul>
    </>
  );
}

export default Sublist;