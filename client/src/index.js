import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import axios from "axios";
window.axios = axios;

ReactDOM.render(<App />, document.querySelector("#root"));
