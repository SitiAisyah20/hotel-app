import React from "react";
import MainContainer from "./navigation/MainContainer";
import { Provider } from "react-redux";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  );
}
