import React from "react";

import logo from "./logo.svg";
import { useGetUserQuery } from "./services/users";

import "./App.css";

function App() {
  const { data, isLoading, isSuccess } = useGetUserQuery();

  if (isLoading) {
    return <div>Loading ....</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {isSuccess && (
        <div className="App-body">
          {Object.entries(data).map(([key, value]) => (
            <div key={key} className="item">
              <div className="item-key">{key} :</div>
              <div className="item-value">{value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
