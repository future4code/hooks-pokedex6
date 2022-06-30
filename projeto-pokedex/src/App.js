import React from "react";
import GlobalState from "./Global/GlobalState";
import Router from "./Router/Router"

function App() {
  return (
    <div>
      <GlobalState>
        <Router/>
      </GlobalState>
    </div>
  )
}

export default App;
