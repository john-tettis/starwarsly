### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?
	- Redux is a node package that enables an app to use a centralized store. This store has a coder-defined reducer function that modifies the store according to 'action.type' passed to said reducer. It is useful in storign data that multiple components or pages need access to, it solves the problem of prop drilling.

- What are three features of the Redux developer tool in Chrome?
	- I could never get my developer tools to work, unfortunately. You can view the dispatched actions, check store, and test your code

- What is a store?
	- A store is a redux object that takes a reducer as an initial argument.It stores any js value, object and array being the most common. Store has a getState and a dispatch method on it. getState returns the current state of the store, dispatch hits some endpont in the reducer and updates /adds/changes values depending.

- What is a reducer?
	- - A reducer is a function that takes in an argument, action, including type and payload. The reducer uses this information to modify the redux store.

- What is an action?
	- action is an object passed to a reducer usually formatted => ``
	{
	type='SOME_ACTION', payload:{...necessary info}
	}
``
	- this tells the reducer which function to run (type) and what information to use(payload)
	- ``
	{
	type='ADD_USER', payload:{username,password,email}
	}
``

- What is an action creator?
	- An action creator is a function that returns an action object, this adds a layer of abstraction to redux that makes it easier and less cluttered as a developer to dispatch reducer functions.

- How does data flow in a React/Redux application?
	- A component will initiate some kind of action creator = > creates an an action => action is dispatched => state is changed => components rerender to update information.

- What is the purpose of the `<Provider>` component?
	- The provider component makes the store and its reacty functions available to all  children components

- What is the purpose of the `useSelector` hook? What does it return?
	- useSelector selects a specific piece of the redux state, and listens for said piece to change, and triggers a rerender.

- Describe the `useDispatch` hook. What do you use it for?
	- the useDispatch hook creates a dispatch function to use inside a component, the hook does the heavy lifting as far as configuring the dispatch properly.

- What is redux-thunk and why would you use it?
	- redux thunk is a way to pass an async function through to the reducer to call which usually calls dispatch again from within.

- What are propTypes?
	- PropTypes is an additional react package that allows developers to define types for their props, which will output a warning if the acutal prop type does not match the propType value.

- Describe the `useCallback` hook.  What is it used for?
	- useCallback memoizes a function so that it is declared once, and again any time its dependancies change. Since func !== redeclared_func, not using useEffect can cause infinite rerenders, or passing func to a child component means taht that child rerenders 100% of the time a parent rerenders, since any functions declared in the parent are redeclared upon rerender... unless these functions are passed to useCallback.

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
	- The useReducer hook allows for state to be defined with a reducer function, similar to redux. However, this is not scoped to all components, unless used in conjunction with useContext.For this reason redux is more effective for use cases requiring many components have access to the state. useReducer is better used for individual components and their state.