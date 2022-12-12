import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from "react-ga";

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
