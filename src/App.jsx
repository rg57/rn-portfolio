import React, { useRef } from "react"
import { Box, CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Header from "./components/Header"
import HeroSection from "./components/HeroSection"
import AboutSection from "./components/AboutSection"
import ProductsSection from "./components/ProductsSection"
import ContactSection from "./components/ContactSection"
import Footer from "./components/Footer"

const theme = createTheme({
  palette: {
    primary: { main: "#0d0d0d" }, // Deep Black
    secondary: { main: "#e0c066" }, // Luxurious Gold
    text: { primary: "#fff", secondary: "#e0c066" },
  },
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontSize: "4rem",
      fontWeight: 900,
      color: "#e0c066",
      letterSpacing: "2px",
      textTransform: "uppercase",
    },
    h3: { fontSize: "2.5rem", fontWeight: 700, color: "#e0c066" },
    body1: { fontSize: "1.2rem", color: "#fff", lineHeight: 1.8 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "1.3rem",
          padding: "14px 28px",
          borderRadius: "8px",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.08)",
            backgroundColor: "#b8962e",
          },
        },
      },
    },
  },
})

function App() {
  const homeRef = useRef(null)
  const aboutRef = useRef(null)
  const productsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          overflowY: "auto",
          scrollSnapType: "y mandatory",
          height: "100vh",
          background: "#0d0d0d",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <Header
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, productsRef, contactRef }}
        />
        <HeroSection
          refs={{ homeRef, productsRef }}
          scrollToSection={scrollToSection}
        />
        <ProductsSection
          refs={{ productsRef, contactRef }}
          scrollToSection={scrollToSection}
        />
        <AboutSection ref={aboutRef} />

        <ContactSection ref={contactRef} />
        <Footer />
      </Box>
    </ThemeProvider>
  )
}

export default App
