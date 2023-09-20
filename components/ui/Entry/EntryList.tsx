import { List, Paper } from "@mui/material";

export const EntryList = () => {
  return (
    // Drop
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 100px)",
          overflow: "scroll",
          backgroundColor: "transparent",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <List
          sx={{
            opacity: 1,
          }}
        ></List>
      </Paper>
    </div>
  );
};
