import React from "react"
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import ContactMailIcon from "@mui/icons-material/ContactMail"

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

const Header = ({ scrollToSection, refs }) => {
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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <NavButton
            onClick={() => scrollToSection(refs.home)}
            startIcon={<HomeIcon sx={{ color: "#d4af37" }} />}
            sx={{ fontSize: "1rem" }}
          >
            Home
          </NavButton>
          <NavButton
            onClick={() => scrollToSection(refs.aboutRef)}
            startIcon={<InfoIcon sx={{ color: "#d4af37" }} />}
            sx={{ fontSize: "1rem" }}
          >
            About
          </NavButton>
          <NavButton
            onClick={() => scrollToSection(refs.productsRef)}
            startIcon={<ShoppingCartIcon sx={{ color: "#d4af37" }} />}
            sx={{ fontSize: "1rem" }}
          >
            Products
          </NavButton>
          <NavButton
            onClick={() => scrollToSection(refs.contactRef)}
            startIcon={<ContactMailIcon sx={{ color: "#d4af37" }} />}
            sx={{ fontSize: "1rem" }}
          >
            Contact
          </NavButton>
        </motion.div>
      </Toolbar>
    </StyledAppBar>
  )
}

export default Header
