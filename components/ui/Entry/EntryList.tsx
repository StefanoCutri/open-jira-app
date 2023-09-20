import { List, Paper } from "@mui/material";
import { EntryCard } from "..";

import { EntryStatus } from "@/interfaces";
import { useContext, useMemo } from "react";
import { EntriesContext } from "@/context/entries";

interface Props {
    status: EntryStatus
}

export const EntryList = ({status}: Props) => {
    const {entries} = useContext(EntriesContext)
    const entriesByStatus = useMemo(()=> entries.filter(entry => entry.status === status), [])
    console.log(entriesByStatus);
    
  return (
    // Drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 100px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": { display: "none" },
          padding: 1 
        }}
      >
        <List
          sx={{
            opacity: 1,
          }}
        >
          {
            entriesByStatus.map(entrie => (
                <EntryCard key={entrie._id} entry={entrie}/>
            ))
          }
        </List>
      </Paper>
    </div>
  );
};
