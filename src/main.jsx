import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {RoutesConfig} from "./Routes/RoutesConfig.jsx";
import {Provider} from "react-redux";
import store from "./Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RoutesConfig>
                <App/>
            </RoutesConfig>
        </Provider>
    </React.StrictMode>
);
