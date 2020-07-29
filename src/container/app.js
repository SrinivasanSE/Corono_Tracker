import React from "react";
import App from "../Components/App";
import { Provider } from "react-redux";
import { store } from "../redux/store/store";

const AppContainer = () => {
  return (
    <div>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
};

export default AppContainer;
