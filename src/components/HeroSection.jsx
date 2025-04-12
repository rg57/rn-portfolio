import React, { forwardRef, useState, useEffect } from "react"
import { Container, Typography, Box, Button, Grid } from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"
import heroImage1 from "../assets/heroimage1.jpg"
import heroImage2 from "../assets/heroimage2.jpg"

const Section = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  padding: "20px",
  textAlign: "center",
}))

const DiagonalImage = styled(Box)(({ isTopLeft, bgImage }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.8s ease-in-out",
  clipPath: isTopLeft
    ? "polygon(0 0, 100% 0, 0 100%)"
    : "polygon(100% 0, 100% 100%, 0 100%)",
}))

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  zIndex: 1,
})

const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 2,
  color: "#fff",
  width: "100%",
  maxWidth: "1200px",
  padding: "20px",
})

const GoldAccent = styled(Box)({
  width: "40px",
  height: "3px",
  backgroundColor: "#d4af37",
  margin: "0 auto 20px",
  boxShadow: "0 0 6px rgba(212, 175, 55, 0.5)",
})

const FeatureItem = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px",
  textAlign: "center",
})

const FeatureIcon = styled(Box)({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "rgba(212, 175, 55, 0.1)",
  border: "1px solid #d4af37",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "15px",
  color: "#d4af37",
  fontSize: "22px",
})
const CenteredGridContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  width: "100%",
  margin: "20px auto 40px",
  maxWidth: "1000px", // Limit width to ensure proper centering
}))

// Button with animation
const AnimatedButton = styled(motion.div)({
  display: "inline-block",
  marginTop: "20px",
})

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

const HeroSection = forwardRef(({ refs, scrollToSection }, ref) => {
  return (
    <Section ref={refs.homeRef}>
      <DiagonalImage isTopLeft={true} bgImage={heroImage1} />
      <DiagonalImage isTopLeft={false} bgImage={heroImage2} />
      <Overlay />

      <Container maxWidth="lg">
        <HeroContent>
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "#d4af37",
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              letterSpacing: "1px",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            RN Enterprises
          </Typography>
          <GoldAccent />
          <Typography
            variant="h5"
            sx={{
              color: "#fff",
              fontWeight: "300",
              letterSpacing: "1px",
              maxWidth: "800px",
              margin: "0 auto 30px",
            }}
          >
            Premium Red Chillies for the Discerning Palate — Cultivated with
            Passion, Processed with Precision, Perfected for Excellence
          </Typography>

          <CenteredGridContainer
            container
            spacing={3}
            component={motion.div}
            variants={containerVariants}
          >
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem>
                <FeatureIcon>✓</FeatureIcon>
                <Typography variant="h6" sx={{ color: "#d4af37", mb: 1 }}>
                  Enhances Taste
                </Typography>
                <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                  Elevate dishes flavors and aromas.
                </Typography>
              </FeatureItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>★</FeatureIcon>
                <Typography variant="h6" sx={{ color: "#d4af37", mb: 1 }}>
                  100% Pure
                </Typography>
                <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                  No fillers, additives or artificial ingredients
                </Typography>
              </FeatureItem>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <FeatureItem variants={itemVariants}>
                <FeatureIcon>♦</FeatureIcon>
                <Typography variant="h6" sx={{ color: "#d4af37", mb: 1 }}>
                  Premium Selection
                </Typography>
                <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                  Hand-selected for color, aroma and flavor
                </Typography>
              </FeatureItem>
            </Grid>
          </CenteredGridContainer>

          <AnimatedButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={() => scrollToSection(refs.productsRef)}
              variant="contained"
              sx={{
                backgroundColor: "#d4af37",
                color: "#000",
                fontWeight: "bold",
                padding: "14px 32px",
                fontSize: "1.1rem",
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#b8962e" },
                boxShadow: "0 4px 20px rgba(212, 175, 55, 0.4)",
                letterSpacing: "1px",
                textTransform: "none",
              }}
            >
              Explore Premium Collection
            </Button>
          </AnimatedButton>
        </HeroContent>
      </Container>
    </Section>
  )
})

export default HeroSection
