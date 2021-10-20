This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




# `StarWarsly`
Starwarsly is a react-redux-app using [https://www.npmjs.com/package/redux-persist/v/5.6.2][redux-persist] and [https://axios-http.com/docs/intro](Axios)
to retreive and store star wars facts as users explore the site. Information is provided on people, planets, and films. Every item is Unkown to the user until they view said item  and its data is retreived, and subsequently saved in the persisted-store.. This does not include the starting point, A new hope, which contains links to people and planets in the film, which the user can view and save to the store. This way the app works is like an exploration! 

For a full list of dependencies, check package-lock.json


## Installation

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
