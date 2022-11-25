import { createContext, Dispatch, ReactNode, useState } from "react";

type ContextProps = {
  isAuth: boolean;
  setIsAuth: Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<ContextProps>({
  isAuth: false,
  setIsAuth: () => {},
});

export const AppContextProvider = (props: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      {props.children}
    </AppContext.Provider>
  );
};
