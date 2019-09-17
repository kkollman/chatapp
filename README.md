### TODO:
- Removing messages (frontend)
- Editing messages (frontend)
- Changing username (backend/frontend)

## Chat App
Couple of assumptions I made before starting: I though it would make much more sense to treat this as an introduction to a bigger app. That said, I've constructed it assuming it may be extended later on, that new features may be added, styles should be easily edited, and so on. Therefore every element is treated as separate component.

I have used mobx to control app's state, which is why I've introduced containers to control state on component level.

Each separate component has storybook `stories` set up with `knobs` addon to introduce testing different props. 

Styling is done via `sass-modules`, with couple of base files to ensure typography, colors and transition times are the same across the app.

The project has been bootstrapped with `create-react-app`.

## Available Scripts

### Frontend
To start the frontend, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Backend
To start the backend server, just run the `server.js` file found in `src/backend` directory.

### Tests

Backend models are tested with jest, while frontend components are presented to manual testing in Storybook.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run storybook`

Runs the storybook - component catalogue that allows each component to be tested with different props provided.

### Other - `create-react-app` defaults
### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
