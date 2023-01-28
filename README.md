# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
# conteur
Simple React component called "Compteur" that renders a counter value and two buttons, "Incrementer" and "Decrementer", on the screen. When the "Incrementer" button is clicked, the state variable "compteur" is incremented by 1 using the "setCompteur" function. When the "Decrementer" button is clicked, the state variable "compteur" is decremented by 1 using the "setCompteur" function. The "compteur" state variable is used to display the current count on the screen.
The first piece of code use function component and hooks, the second one use class component and states.
In the class component version, the componentDidMount, componentDidUpdate and componentWillUnmount are lifecycle methods.
componentDidMount is used to run some code after the component has rendered, componentDidUpdate is used to run some code after the component has updated (after setState) and componentWillUnmount is used to run some code when the component is unmounted.
## App
Simple React application that renders a button to "Monter" and a button to "Demonter" on the screen. When the "Monter" button is clicked, the state variable "isMonter" is set to true and the component "Compteur" is rendered. When the "Demonter" button is clicked, the state variable "isMonter" is set to false and the component "Compteur" is not rendered. The "isMonter" state variable is used to control the disabled property of the buttons and the visibility of the "Compteur" component.
The first piece of code use function component and hooks, the second one use class component and states.
## Result :
![Capture d’écran 2023-01-28 à 16 47 39](https://user-images.githubusercontent.com/117936276/215275919-a216e45a-2d5c-40f5-b1d8-d23b904d407a.png)

