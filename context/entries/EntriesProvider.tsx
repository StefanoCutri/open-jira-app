import React, { FC, useReducer } from "react";
import { EntriesContext, EntriesReducer } from "./";

export interface EntriesState {
  property: boolean;
}

const Entries_INITIAL_STATE: EntriesState = {
  property: false,
};

interface Props {
  children?: React.ReactNode | undefined;
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(EntriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
