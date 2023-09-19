import { Box, Drawer, List, Typography } from "@mui/material";

export const Sidebar = () => {

    const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts']

  return (
    <Drawer anchor="left" open onClose={() => console.log("cosing")}>
      <Box sx={{padding: '5px 10px'}}>
        <Typography variant="h4">Menu</Typography>
      </Box>
      <List>

      </List>
    </Drawer>
  );
};
