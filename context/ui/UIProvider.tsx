import { useReducer } from "react";
import { UIContext, UIReducer } from ".";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const UIProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: "UI - Open Sidebar" });
  };
  const closeSideMenu = () => {
    dispatch({ type: "UI - Close Sidebar" });
  };

  const setIsAddingEntry = (isAdding: boolean) => {
    dispatch({ type: "UI - Adding Entry", payload: isAdding });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,
        setIsAddingEntry
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
