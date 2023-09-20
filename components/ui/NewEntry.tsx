import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";
import AddIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const NewEntry = () => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAdding ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder="New entry"
            autoFocus
            multiline
            label="New entry"
            helperText="Enter new value"
          />

          <Box display="flex" justifyContent="space-between">
            <Button variant="text" onClick={() => setIsAdding(false)}>Cancel</Button>
            <Button
              endIcon={<SaveOutlinedIcon />}
              color="secondary"
              variant="outlined"
            >Save</Button>
          </Box>
        </>
      ) : (
        <Button startIcon={<AddIcon />} fullWidth variant="outlined" onClick={() => setIsAdding(true)}>Add</Button>
      )}
    </Box>
  );
};
