import { createContext } from "react";

interface ContextProps {
    sideMenuOpen: boolean;
    openSideMenu: () => void;
    closeSideMenu: () => void;
    setIsAddingEntry: (isAdding: boolean) => void;
    isAddingEntry: boolean;
    
}

export const UIContext = createContext({} as ContextProps)