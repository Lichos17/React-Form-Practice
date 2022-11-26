import { createContext, Dispatch, ReactNode, useState } from "react";

type ContextProps = {
  isAuth: boolean;
  setIsAuth: Dispatch<React.SetStateAction<boolean>>;
};

const AppContext = createContext<ContextProps>({
  isAuth: false,
  setIsAuth: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
