import React, { useState, useContext } from "react";
const Context = React.createContext();

function ContextProvider({ children }) {
  const [test, setTest] = useState([]);
  return (
    <Context.Provider value={{ test, setTest }}>{children}</Context.Provider>
  );
}

function useHello() {
  const { test, setTest } = useContext(Context);
  return { test, setTest };
}

const Context1 = React.createContext("light");
const ContextProvider1 = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");
  return (
    <Context1.Provider value={{ colorMode, setColorMode }}>
      {children}
    </Context1.Provider>
  );
};

const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(Context1);
  return colorMode;
};

const useSetColorMode = (a) => {
  const { colorMode, setColorMode } = useContext(Context1);
  setColorMode(a);
  return true;
};

export {
  Context,
  ContextProvider,
  useHello,
  ContextProvider1,
  useColorMode,
  useSetColorMode,
};
