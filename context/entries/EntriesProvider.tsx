import React, { FC, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import { EntriesContext, entriesReducer } from "./";
import { Entry } from "@/interfaces";
import { NewEntry } from "../../components/ui/NewEntry";
import { entriesApi } from "@/apis";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
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

  const updateEntry = (entry: Entry) => {
    dispatch({ type: "[Entry] Update-Entry", payload: entry });
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>("/entries");
    dispatch({type: '[Entry] Refresh-Entries', payload: data})
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
