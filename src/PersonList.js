import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'

/**
 * Renders list of people using ItemList component. Only renders 
 * people found in state, people the user has already viewed.
 * @returns {<ItemList/>}
 */
function PersonList() {
  const items = useSelector(st => Object.values(st.people).map(
    p => ({...p, url: `/people/${p.id}`})
  ));
  return <ItemList title="People" items={items} />;
}

export default PersonList;