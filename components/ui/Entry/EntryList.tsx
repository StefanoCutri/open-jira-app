import { useContext, useMemo, DragEvent } from "react";
import { List, Paper } from "@mui/material";

import { EntryStatus } from "@/interfaces";
import { EntryCard } from "..";
import { EntriesContext } from "@/context/entries";
import { UIContext } from "@/context/ui";

import styles from "./EntryList.module.css";

interface Props {
  status: EntryStatus;
}

export const EntryList = ({ status }: Props) => {
  const { isDragging, setOnDragEnd } = useContext(UIContext);

  const { entries, updateEntry } = useContext(EntriesContext);
  const entriesByStatus = useMemo(
    () => entries.filter((entry) => entry.status === status),
    [entries]
  );

  const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
    const id = event.dataTransfer.getData("text");
    let entry = entries.find((e) => e._id === id)!;
    entry.status = status;

    updateEntry(entry);
    setOnDragEnd();
  };

  const allowDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    // Drop
    <div
      onDrop={onDropEntry}
      onDragOver={allowDrop}
      className={isDragging ? styles.dragging : ""}
    >
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
            opacity: isDragging ? 0.3 : 1,
            transition: "all .3s ease",
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
