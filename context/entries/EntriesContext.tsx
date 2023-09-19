import { createContext } from 'react';


interface ContextProps {
    property: boolean;
}


export const EntriesContext = createContext({} as ContextProps );