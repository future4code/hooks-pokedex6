import { useState } from "react";

import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [pokedex, setPokedex] = useState([]);

  const states = {
    pokedex,
    setPokedex,
  };

  return (
    <GlobalStateContext.Provider value={states}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
