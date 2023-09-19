import {useContext} from 'react';
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import MailOutlineOutlined from "@mui/icons-material/MailOutlineOutlined";
import { UIContext } from '@/context/ui';

export const Sidebar = () => {

  const {sideMenuOpen} = useContext(UIContext)

  const menuItems: string[] = ["Inbox", "Starred", "Send email", "Drafts"];

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={() => console.log("cosing")}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlined />}
              </ListItemIcon>
              <ListItemText>{item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
