const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const addFiveButton = document.getElementById('add-five');

const removeFiveButton = document.getElementById('remove-five');

incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

addFiveButton.addEventListener('click', e => dispatch({ type: "ADDFIVE" }));

removeFiveButton.addEventListener('click', e => dispatch({ type: "REMOVEFIVE" }));