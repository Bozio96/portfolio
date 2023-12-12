import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export default function NavListDrawer({ navLinks }) {
  
  
  return (
    <Box component={'header'} sx={{ width: 250, height: 700, bgcolor: "#31039c" }}>
      <nav>
        <List>
          {navLinks.map((item) => (
            <>
              <ListItem>
                <ListItemIcon sx={{color: '#ffffff'}}>{item.icon}</ListItemIcon>
                <ListItemButton component="a" href={item.path} target="_blank">
                  <ListItemText sx={{color: '#ffffff'}}>{item.title}</ListItemText>
                </ListItemButton>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </nav>
    </Box>
  );
}
