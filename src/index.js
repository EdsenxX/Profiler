import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(
  reducers, // Todos los reducers
  {}, // Estado inical
  applyMiddleware(reduxThunk)
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
