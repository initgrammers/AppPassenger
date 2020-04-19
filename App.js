import React from "react";
import MainNavigation from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux";
export default function App() {
  console.disableYellowBox = true;
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
