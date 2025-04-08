import React, { forwardRef } from "react"
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"
import InfoIcon from "@mui/icons-material/Info"
import rnLogo from "../assets/rn_logo.png"
import rnbanner from "../assets/rn_banner.png"

const Section = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: "80px 0",
  backgroundColor: "#1a1a1a",
  display: "flex",
  alignItems: "center",
}))

const ContentBox = styled(motion.div)(({ theme }) => ({
  padding: "32px",
  background: "rgba(255, 255, 255, 0.08)",
  borderRadius: "16px",
  boxShadow: "0 8px 24px rgba(224, 192, 102, 0.15)",
  backdropFilter: "blur(6px)",
}))

const ImageBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${rnbanner})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgba(255, 255, 255, 0.05)",
  borderRadius: "16px",
  minHeight: "400px",
  width: "100%",
}))

const AboutSection = forwardRef((props, ref) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  return (
    <Section ref={ref}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <ContentBox
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#e0c066",
                  fontWeight: "bold",
                }}
              >
                <InfoIcon sx={{ mr: 1.5, fontSize: "2.5rem" }} />
                About Us
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#ffffffcc" }}>
                At RN Enterprises, our mission is simple yet powerful — to bring
                the finest quality spices into every kitchen, locally and
                globally. We handpick premium raw materials from trusted farms
                and ensure they meet our high standards before reaching your
                table.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2, color: "#ffffffcc" }}>
                We believe that great flavor starts with great sourcing. That’s
                why every spice we deliver is a result of careful selection,
                hygienic processing, and a deep respect for purity and
                tradition. Our commitment to consistency and quality is at the
                heart of everything we do.
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 3,
                  color: "#e0c066",
                  fontStyle: "italic",
                  fontWeight: 500,
                }}
              >
                "From farm to table, we bring you the finest red chillies with
                authenticity and passion."
              </Typography>
            </ContentBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ImageBox />
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 12, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              color: "#e0c066",
              mb: 6,
              fontWeight: "bold",
              letterSpacing: 1,
            }}
          >
            Meet the People Behind RN Enterprises
          </Typography>

          <Grid container spacing={5} justifyContent="center">
            {[
              {
                name: "Rachit Gupta",
                role: "A dynamic entrepreneur and full-stack software developer, Rachit brings the perfect blend of technical expertise and business acumen. Passionate about innovation and contributing to society, he drives RN Enterprises with a vision to make world-class spices accessible to every home.",
                image: "/path-to-rachit-image.jpg", // optional
              },
              {
                name: "Nikhil Sharma",
                role: "With deep experience in sales and marketing, Nikhil is the strategic force behind RN Enterprises’ brand growth. As a visionary planner, he focuses on building strong relationships, scaling operations, and crafting a bold global identity for the company.",
                image: "/path-to-nikhil-image.jpg", // optional
              },
            ].map((member, index) => (
              <Grid item xs={12} sm={6} md={5} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 4,
                      background: "rgba(255, 255, 255, 0.06)",
                      borderRadius: "16px",
                      boxShadow: "0 8px 30px rgba(224, 192, 102, 0.1)",
                      textAlign: "center",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 12px 40px rgba(224, 192, 102, 0.2)",
                        background: "rgba(255, 255, 255, 0.08)",
                      },
                    }}
                  >
                    {/* Optional Avatar */}
                    {/* <Avatar
              src={member.image}
              alt={member.name}
              sx={{
                width: 80,
                height: 80,
                mx: "auto",
                mb: 2,
                border: "2px solid #e0c066",
              }}
            /> */}

                    <Typography
                      variant="h5"
                      sx={{ color: "#e0c066", fontWeight: 600, mb: 1 }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#ffffffcc", lineHeight: 1.6 }}
                    >
                      {member.role}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  )
})

export default AboutSection
