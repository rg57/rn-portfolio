import React, { forwardRef } from "react"
import { Container, Typography, TextField, Button, Box } from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"
import ContactMailIcon from "@mui/icons-material/ContactMail"

const Section = styled(Box)({
  minHeight: "100vh",
  padding: "100px 0",
  backgroundColor: "#121212",
  textAlign: "center",
})

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": { backgroundColor: "#2a2a2a", color: "#fff" },
  "& .MuiInputLabel-root": { color: "#d4af37" },
  "& .MuiOutlinedInput-root": { "& fieldset": { borderColor: "#d4af37" } },
})

const ContactSection = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContactMailIcon sx={{ mr: 2, color: "#d4af37" }} /> Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Email: info@rnentp.com | Phone: +91-123-456-7890
          </Typography>
          <Box component="form" sx={{ maxWidth: "700px" }}>
            <StyledTextField
              fullWidth
              label="Name"
              margin="normal"
              variant="outlined"
            />
            <StyledTextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
            />
            <StyledTextField
              fullWidth
              label="Message"
              margin="normal"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: "#d4af37",
                color: "#1a1a1a",
                fontSize: "1.3rem",
                "&:hover": { backgroundColor: "#b8962e" },
              }}
            >
              Send Message
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Section>
  )
})

export default ContactSection
