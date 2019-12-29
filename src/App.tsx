import React from "react";
import Search from "./screens/search";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  console.log(store);
  return (
    <Provider store={store}>
      <Search />
    </Provider>
  );
};

export default App;
