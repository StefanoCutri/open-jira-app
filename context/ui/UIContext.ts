import { createContext } from "react";

interface ContextProps {
    contextProperty: boolean
}

export const UIContext = createContext({} as ContextProps)