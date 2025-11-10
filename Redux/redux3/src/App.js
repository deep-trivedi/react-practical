import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import AddUser from "./components/AddUser";
import UserList from "./features/users/UserList";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1>Redux Toolkit CRUD App</h1>
        <AddUser />
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
