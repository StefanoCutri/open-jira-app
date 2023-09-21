import React, { FC, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";
import { NewEntry } from "../../components/ui/NewEntry";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Lorem ipsum",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "Lorem ipsum 2",
      status: "in-progress",
      createdAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description: "Lorem ipsum 3",
      status: "finished",
      createdAt: Date.now() - 30000,
    },
  ],
};

interface Props {
  children?: React.ReactNode | undefined;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const NewEntry: Entry = {
      _id: uuidv4(),
      createdAt: Date.now(),
      description,
      status: "pending",
    };
    
    dispatch({ type: "[Entry] Add-Entry", payload: NewEntry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
