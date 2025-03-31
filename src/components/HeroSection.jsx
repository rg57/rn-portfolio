import React, { forwardRef, useState, useEffect } from "react"
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Divider,
} from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"
import heroImage1 from "../assets/heroImage1.jpg"
import heroImage2 from "../assets/heroImage2.jpg"

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

// Diagonal split using clip-path - keeping this logic unchanged
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
  backgroundColor: "rgba(0, 0, 0, 0.7)", // Slightly darker for more premium look
  zIndex: 1,
})

const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 2,
  color: "#fff",
  width: "100%",
})

// Premium decorative elements
const GoldAccent = styled(Box)({
  width: "40px",
  height: "3px",
  backgroundColor: "#d4af37",
  margin: "0 auto 20px",
  boxShadow: "0 0 6px rgba(212, 175, 55, 0.5)",
})

const PremiumBadge = styled(motion.div)({
  display: "inline-flex",
  padding: "4px 12px",
  backgroundColor: "rgba(212, 175, 55, 0.15)",
  border: "1px solid #d4af37",
  borderRadius: "4px",
  fontSize: "0.85rem",
  fontWeight: "bold",
  color: "#d4af37",
  letterSpacing: "1px",
  marginBottom: "15px",
})

const FeatureItem = styled(motion.div)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "15px",
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

// Button with animation
const AnimatedButton = styled(motion.div)({
  display: "inline-block",
  marginTop: "20px",
})

// Centered container for features grid
const CenteredGridContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  width: "100%",
  margin: "20px auto 40px",
  maxWidth: "1000px", // Limit width to ensure proper centering
}))

const HeroSection = forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false)
  const [count, setCount] = useState(0)

  // Animated counter effect for the stats
  useEffect(() => {
    if (count < 25) {
      const timer = setTimeout(() => setCount((prevCount) => prevCount + 1), 60)
      return () => clearTimeout(timer)
    }
  }, [count])

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

  return (
    <Section
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <DiagonalImage
        isTopLeft={true}
        bgImage={heroImage1}
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      />
      <DiagonalImage
        isTopLeft={false}
        bgImage={heroImage2}
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      />

      <Overlay />
      <Container
        maxWidth="lg"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <HeroContent>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <PremiumBadge
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                PREMIUM QUALITY
              </PremiumBadge>
            </motion.div>

            <motion.div variants={itemVariants}>
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
            </motion.div>

            <motion.div variants={itemVariants}>
              <GoldAccent />
            </motion.div>

            <motion.div variants={itemVariants}>
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
            </motion.div>

            <CenteredGridContainer
              container
              spacing={3}
              component={motion.div}
              variants={containerVariants}
            >
              <Grid item xs={12} md={4}>
                <FeatureItem variants={itemVariants}>
                  <FeatureIcon>✓</FeatureIcon>
                  <Typography variant="h6" sx={{ color: "#d4af37", mb: 1 }}>
                    {count}+ Years Experience
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                    Generations of expertise in chilli cultivation
                  </Typography>
                </FeatureItem>
              </Grid>
              <Grid item xs={12} md={4}>
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
              <Grid item xs={12} md={4}>
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
          </motion.div>
        </HeroContent>
      </Container>
    </Section>
  )
})

export default HeroSection
