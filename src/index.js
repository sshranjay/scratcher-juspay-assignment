import React from "react";
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import ReduxStore from "./store";
import App from "./App";
import "tailwindcss/tailwind.css";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={ReduxStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
