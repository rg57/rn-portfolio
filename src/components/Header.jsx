import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { styled, useTheme } from "@mui/system"
import { motion } from "framer-motion"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import MenuIcon from "@mui/icons-material/Menu"
import useMediaQuery from "@mui/material/useMediaQuery"

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderBottom: "2px solid #d4af37",
  padding: "10px 0",
  boxShadow: "0px 4px 10px rgba(212, 175, 55, 0.3)",
}))

const NavButton = styled(Button)({
  marginLeft: "20px",
  fontSize: "1.2rem",
  color: "#fff",
  fontWeight: "bold",
  padding: "8px 16px",
  transition: "all 0.3s ease-in-out",
  borderRadius: "8px",
  "&:hover": {
    backgroundColor: "rgba(212, 175, 55, 0.2)",
    transform: "scale(1.05)",
  },
})

const StyledDrawer = styled(Drawer)({
  "& .MuiPaper-root": {
    backgroundColor: "#121212", // Dark background
    color: "#d4af37", // Gold text
    width: 250,
  },
})

const Header = ({ scrollToSection, refs }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md")) // Detect mobile screens

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open)
  }

  const handleScroll = (ref) => {
    if (ref?.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 200) // Wait before closing menu

      setDrawerOpen(false) // Close menu
    }
  }

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, ref: refs.home },
    { text: "About", icon: <InfoIcon />, ref: refs.aboutRef },
    { text: "Products", icon: <ShoppingCartIcon />, ref: refs.productsRef },
    { text: "Contact", icon: <ContactMailIcon />, ref: refs.contactRef },
  ]

  return (
    <StyledAppBar position="sticky">
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "1300px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: "2rem", color: "#d4af37", fontWeight: "bold" }}
        >
          RN Enterprises
        </Typography>

        {isMobile ? (
          <>
            {/* Mobile Menu Button */}
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon sx={{ color: "#d4af37", fontSize: "2rem" }} />
            </IconButton>

            {/* Drawer Menu */}
            <StyledDrawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List>
                {menuItems.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton
                      onClick={() => handleScroll(item.ref)}
                      sx={{
                        "&:hover": {
                          backgroundColor: "#d4af37",
                          color: "#121212",
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: "#d4af37" }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText
                        primary={item.text}
                        sx={{ color: "#d4af37", fontWeight: "bold" }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </StyledDrawer>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {menuItems.map((item) => (
              <NavButton
                key={item.text}
                onClick={() => handleScroll(item.ref)}
                startIcon={<item.icon.type sx={{ color: "#d4af37" }} />}
                sx={{ fontSize: "1rem" }}
              >
                {item.text}
              </NavButton>
            ))}
          </motion.div>
        )}
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header
