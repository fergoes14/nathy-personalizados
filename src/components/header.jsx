import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setMenuOpen(open);
  };

  const buttonStyle = {
    display: { xs: "none", md: "block" },
    color: "black",
    fontWeight: "bold",
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    transition: "all 0.3s ease",
    "&:hover": {
      color: "#8B008B",
    },
  };

  return (
    <>
      {/* Navbar principal */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FF69B4", marginBottom: "50px" }}
      >
        <Toolbar>
          {/* Ícone do menu hambúrguer no mobile */}
          <IconButton
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo / Nome do site */}
          <Typography
            variant="h6"
            sx={{
              color: "black",
              flexGrow: 1,
              letterSpacing: 1,
              fontSize: "2rem",
              fontFamily: "'Pacifico', cursive",
            }}
          >

            Nathy Personalizados{" "}


          </Typography>

          {/* Links do menu (escondidos no mobile) */}
          <Button component={Link} to="/" sx={buttonStyle}>
            Home
          </Button>
          <Button component={Link} to="/trabalhos" sx={buttonStyle}>
            Trabalhos
          </Button>
          <Button component={Link} to="/contato" sx={buttonStyle}>
            Contato
          </Button>
        </Toolbar>
      </AppBar>

      {/* Menu lateral para mobile */}
      <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)} >
        <List sx={{ width: 250, height: "100vh", background: "linear-gradient(135deg, #FFC1E3 30%, #FFD8B1 100%)", }}>

          <ListItem
            component={Link}
            to="/"
            onClick={toggleDrawer(false)}
            sx={{
              textDecoration: "none", // Remove estilo de link
              color: "black",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#8B008B", // Hover roxo
              },
            }}
          >
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem
            component={Link}
            to="/trabalhos"
            onClick={toggleDrawer(false)}
            sx={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#8B008B",
              },
            }}
          >
            <ListItemText primary="Trabalhos" />
          </ListItem>

          <ListItem
            component={Link}
            to="/contato"
            onClick={toggleDrawer(false)}
            sx={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
              fontSize: "1rem",
              transition: "all 0.3s ease",
              "&:hover": {
                color: "#8B008B",
              },
            }}
          >
            <ListItemText primary="Contato" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Header;
