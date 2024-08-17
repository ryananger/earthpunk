import React from "react";
import {createRoot} from "react-dom/client";

import App from './components/App.jsx';
import AppMobile from './components/AppMobile.jsx';

const root = createRoot(document.getElementById("root"));

if (window.innerHeight > window.innerWidth) {
    root.render(<AppMobile/>);
} else {
    root.render(<App />);
}