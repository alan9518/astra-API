# Rick and Morty API Client

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The folder sttucture was created following a custom version of the atomic design https://andela.com/insights/structuring-your-react-application-atomic-design-principles/

It also follows a custom Airbnb's style guide with the help of prettier and esLint makes sure of the integrity of JS code 

Hssky checks that the commit follows the business rules, which can be customized. 




# Folder Structure
.
├── api
│   └── endpoints.js
├── assets
│   ├── 626040807973.pdf
│   ├── logo.png
│   └── noCharacterSelected.jpeg
├── components
│   ├── atoms
│   │   ├── button
│   │   │   ├── Button.js
│   │   │   ├── ButtonStyled.js
│   │   │   └── index.js
│   │   ├── inputText
│   │   │   ├── index.js
│   │   │   ├── InputText.js
│   │   │   └── InputTextStyled.js
│   │   ├── title
│   │   │   ├── index.js
│   │   │   ├── Title.js
│   │   │   └── TitleStyled.js
│   │   └── index.js
│   ├── molecules
│   │   ├── card
│   │   │   ├── Card.js
│   │   │   ├── CardStyled.js
│   │   │   └── index.js
│   │   ├── skeleton
│   │   │   ├── index.js
│   │   │   └── Skeleton.js
│   │   └── index.js
│   ├── organisms
│   │   ├── form
│   │   │   ├── Form.js
│   │   │   └── index.js
│   │   ├── navbar
│   │   │   ├── index.js
│   │   │   ├── Navbar.js
│   │   │   └── NavbarStyled.js
│   │   └── index.js
│   └── templates
│       ├── characterLoaderList
│       │   └── CharacterLoaderList.js
│       ├── charactersArea
│       │   ├── CharactersArea.js
│       │   ├── CharactersAreaStyled.js
│       │   └── index.js
│       ├── header
│       │   ├── Header.js
│       │   └── index.js
│       ├── page
│       │   ├── index.js
│       │   ├── Page.js
│       │   └── PageStyled.js
│       ├── pagination
│       │   ├── index.js
│       │   ├── pagination.js
│       │   └── paginationStyled.js
│       ├── searchContainer
│       │   ├── index.js
│       │   ├── SearchContainer.js
│       │   └── SearchContainerStyled.js
│       └── index.js
├── contexts
│   ├── CharactersContext.js
│   └── index.js
├── hooks
│   └── useCharacters.js
├── providers
│   ├── CharactersProvider.js
│   └── index.js
├── reducers
│   └── CharactersReducer.js
├── router
│   ├── index.js
│   └── Router.js
├── services
│   ├── CharactersService.js
│   └── index.js
├── shared
│   ├── globalStyled.js
│   ├── services.js
│   └── utils.js
├── themes
│   ├── Colors.js
│   └── WhiteModeTheme.js
├── views
│   ├── home
│   │   ├── Home.js
│   │   └── index.js
│   └── index.js
├── App.js
├── App.test.js
├── index.css
├── index.js
├── reportWebVitals.js
└── setupTests.js

## Available Scripts

In the project directory, you can run:

### `npm start`
#### Before running the app, make sure to copy the env.sample file into a new .env file, since the content is just the api url, theres no risk on uploading to github.
#### Also dont forget to run `npm install`

Runs the app in the development mode.\

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

Unfortunately I didn't add any test, even tought i promote `TDD` as the correct way to add code, it would have take even more time to deliver this, so I can only aplogize in advance for this.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## VS Code Plugings to work better woth the app

1. Better Comments: https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
2. CodeTours: https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour
To see how to use codeTours see this links:  
    https://marketplace.visualstudio.com/items?itemName=vsls-contrib.codetour#navigating-tours
    https://www.youtube.com/watch?v=cUoYQKZPZcg
3. Prettier: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode








