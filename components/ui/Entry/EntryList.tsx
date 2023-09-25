import { useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material";

import { EntryStatus } from "@/interfaces";
import { EntryCard } from "..";
import { EntriesContext } from "@/context/entries";

interface Props {
  status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {
  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
  };
  
  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    // Drop
    <div onDrop={onDropEntry} onDragOver={allowDrop}>
      <Paper
        sx={{
          height: "calc(100vh - 100px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": { display: "none" },
          padding: 1,
        }}
      >
        <List
          sx={{
            opacity: 1,
          }}
        >
          {entriesByStatus.map((entrie) => (
            <EntryCard key={entrie._id} entry={entrie} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
