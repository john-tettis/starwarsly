- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
	- Regular expression is a syntac used to search for a particular patern in a string. It is commonly used with the String.match function to return a matched piece of a string.
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
	-The state is stored in local storage, and it is done using the *redux-persist* npm package.
  
- What does `combineReducers` do? Why are we using it? 
	- Combine reducers essentially rakes multiple reducers and assigns each reducer to an individual piece of state. This is useful as we can define multiple reducers for many different pieces of state t]without cluttering up a single reducer.

- How does the "Reset to Fresh Exploration" feature work?
	- Each reducer, people, films, planets, contains an action for 'RESET'_ALL
 which returns the initial value into state. So each reducer is hit by one dispatch, this a useful feature of redux.

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
	- Rather than writing out a list for each component, It is far more efficient to first declare a simpler, generic component that can be customized to fit each specific instance.

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
	- First of all, the render function of App does not need to know whether or not app is loading or not. Second of all, retreiving all of the films means that every component would rerender after any film changes. Super inefficient.
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
	- Using folders to separate code in a modular fashion makes developing easier. Building components on top of other, less specific components, is very effective.
  
- Which Star Wars character would make the best React developer, and why?
	- Chewy or Han honestly. They always were messing around with parts of the falcon mid-battle . crisis. That or R2 or maybe c3p0. He does know over 4 million languages after all! I think it is a little hard to choose!
