import { useReducer } from "react";
import { UIContext, UIReducer } from ".";

export interface UIState {
  sideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
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

  const setOnDragStart = () => {
    dispatch({ type: "UI - Start Draggin" });
  };

  const setOnDragEnd = () => {
    dispatch({ type: "UI - End Draggin" });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        openSideMenu,
        closeSideMenu,

        setIsAddingEntry,

        setOnDragStart,
        setOnDragEnd,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
