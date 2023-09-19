import { createContext } from "vm";

interface ContextProps {
    contextProperty: boolean
}

export const UIContext = createContext({} as ContextProps)