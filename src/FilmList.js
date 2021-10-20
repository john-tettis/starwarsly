import React from 'react';
import { useSelector } from 'react-redux';

import ItemList from './ItemList'


/**
 * Renders list of films using ItemList component. Only renders 
 * films found in state, films the user has already viewed.
 * @returns {<ItemList/>}
 */
function FilmList() {
  const items = useSelector(st => Object.values(st.films).map(
    f => ({...f, url: `/films/${f.id}`})
  ));
  return <ItemList title="Films" items={items} />;
}

export default FilmList;