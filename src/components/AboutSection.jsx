import React, { forwardRef } from "react"
import { Container, Typography, Box, Grid } from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"
import InfoIcon from "@mui/icons-material/Info"
import rnLogo from "../assets/rn_logo.png"

const Section = styled(Box)({
  minHeight: "100vh",
  padding: "100px 0",
  backgroundColor: "#1a1a1a",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const ContentBox = styled(motion.div)({
  padding: "40px",
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "12px",
  boxShadow: "0 8px 16px rgba(224, 192, 102, 0.2)",
})

const ImageBox = styled(Box)({
  backgroundImage: `url(${rnLogo})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(255, 255, 255, 0.15)", // Light overlay to enhance visibility
  borderRadius: "12px",
  height: "100%",
  minHeight: "450px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

const AboutSection = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          alignItems="center"
          sx={{ flexDirection: "row" }}
        >
          <Grid item xs={12} md={6} size={8}>
            <ContentBox
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{ display: "flex", alignItems: "center", color: "#e0c066" }}
              >
                <InfoIcon
                  sx={{ mr: 2, fontSize: "2.5rem", color: "#e0c066" }}
                />{" "}
                About Us
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#fff" }}>
                RN Enterprises is a globally recognized leader in the spice
                industry, specializing in premium red chillies. With an
                unwavering commitment to excellence, we meticulously source the
                finest chillies from India's most fertile regions, ensuring
                unparalleled quality and flavor.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#fff" }}>
                Our dedication to sustainable farming, ethical sourcing, and
                advanced processing techniques sets us apart. We strive to
                deliver spices that enhance culinary experiences while
                supporting farmers and maintaining environmentally friendly
                practices.
              </Typography>
              <Typography
                variant="body1"
                sx={{ mt: 2, color: "#e0c066", fontStyle: "italic" }}
              >
                "From farm to table, we bring you the finest red chillies with
                authenticity and passion."
              </Typography>
            </ContentBox>
          </Grid>
          <Grid item xs={12} md={6} size={4}>
            <ImageBox />
          </Grid>
        </Grid>
        <Box sx={{ mt: 10, textAlign: "center" }}>
          <Typography variant="h4" sx={{ color: "#e0c066", mb: 2 }}>
            Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={5} size={6}>
              <ContentBox>
                <Typography variant="h5" sx={{ color: "#e0c066" }}>
                  Rachit Gupta
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", mt: 1 }}>
                  A visionary entrepreneur with a passion for spices, dedicated
                  to ensuring quality and excellence in every product.
                </Typography>
              </ContentBox>
            </Grid>
            <Grid item xs={12} md={5} size={6}>
              <ContentBox>
                <Typography variant="h5" sx={{ color: "#e0c066" }}>
                  Nikhil Sharma
                </Typography>
                <Typography variant="body2" sx={{ color: "#fff", mt: 1 }}>
                  An expert in sustainable sourcing and supply chain management,
                  driving the brand's global expansion with integrity.
                </Typography>
              </ContentBox>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Section>
  )
})

export default AboutSection
