This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).




# StarWarsly
Starwarsly is a react-redux demo app using [redux-persist](https://www.npmjs.com/package/redux-persist/v/5.6.2) and [Axios](https://axios-http.com/docs/intro) to retreive and store star wars facts as users explore the site. Information is provided on people, planets, and films. Every item is Unkown to the user until they view said item  and its data is retreived, and subsequently saved in the persisted-store.. This does not include the starting point, A new hope, which contains links to people and planets in the film, which the user can then view and gain access to other people, planets, and films. The app works like a tree, each item acts as a node linking to many more items for the user to view and cache. 

For a full list of dependencies, check package-lock.json



### Installation
run:
```cmd
$ git clone https://github.com/john-tettis/starwarsly
```

## Scripts
  > For yarn users, simply replace ```npm``` with ```yarn```
### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />

## Component Structure
![Component Diagram](https://github.com/john-tettis/starwarsly/blob/master/Component%20Diagram.png)
