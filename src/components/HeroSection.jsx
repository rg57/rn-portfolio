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

const DiagonalImage = styled(Box)(({ bgImage }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transition: "transform 0.8s ease-in-out",
}))

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)", // Dark overlay for better readability
  zIndex: 1,
})

const HeroContent = styled(Box)({
  position: "relative",
  zIndex: 2,
  color: "#fff",
  width: "100%",
})

// Gold Decorative Elements
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

// Features Section
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

// Button Animations
const AnimatedButton = styled(motion.div)({
  display: "inline-block",
  marginTop: "20px",
})

const HeroSection = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count < 25) {
      const timer = setTimeout(() => setCount((prevCount) => prevCount + 1), 60)
      return () => clearTimeout(timer)
    }
  }, [count])

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
    <Section ref={ref}>
      <DiagonalImage bgImage={heroImage1} />
      <DiagonalImage bgImage={heroImage2} />
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
                  fontSize: { xs: "2rem", md: "3.5rem" },
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
                  maxWidth: { xs: "90%", md: "800px" },
                  margin: "0 auto 30px",
                }}
              >
                Premium Red Chillies for the Discerning Palate — Cultivated with
                Passion, Processed with Precision, Perfected for Excellence.
              </Typography>
            </motion.div>

            {/* Features */}
            <Grid
              container
              spacing={3}
              sx={{
                justifyContent: "center",
                maxWidth: "1000px",
                margin: "20px auto",
              }}
            >
              <Grid item xs={12} sm={6} md={4}>
                <FeatureItem variants={itemVariants}>
                  <FeatureIcon>✓</FeatureIcon>
                  <Typography variant="h6" sx={{ color: "#d4af37", mb: 1 }}>
                    Enhances Taste & Aroma
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#e0e0e0" }}>
                    Our premium spices elevate your dishes with rich flavors and
                    vibrant aromas.
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
            </Grid>

            {/* Button */}
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
                  padding: "12px 24px",
                  borderRadius: "8px",
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
