import { useState } from "react";
import { AppBar, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";


import NavListDrawer from "./NavListDrawer";

export default function Nav() {
  const navLinks = [
    {
      title: "LinkedIn",
      path: "https://www.linkedin.com/in/rodrigo-bozio-a2838221b/",
      icon: <LinkedInIcon />,
    },
    {
      title: "Github",
      path: "https://github.com/Bozio96",
      icon: <GitHubIcon />,
    },
    {
      title: "WhatsApp",
      path: "https://wa.me/+5493402486731?text=Hola%20Rodrigo.",
      icon: <WhatsAppIcon/>,
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position="sticky" sx={{display: {xs:'flex', sm: 'none'}, bgcolor:'#31039c'}}>
        <Toolbar>
          <IconButton
            sx={{ display: { xs: "flex", sm: "none" }, color:'#ffffff' }}
            onClick={() => setOpen(true)}
          >
            <AccountCircleIcon />
            <p> Cuentas</p>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{ display: { xs: "flex", sm: "none" } }}
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
      >
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
}
