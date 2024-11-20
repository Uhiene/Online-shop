import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { store } from "./app/store";
import { Provider } from "react-redux";
import { productsFetch } from "./features/products/slice/productsSlice";


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(productsFetch())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
        <ToastContainer />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);
