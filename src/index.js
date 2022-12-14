import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./App";
import reducers from "./reducers";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    {/* agora qualquer componente dentro de app tem acesso ao reposit reducers*/}
    <App />
  </Provider>,

  document.querySelector("#root")
);