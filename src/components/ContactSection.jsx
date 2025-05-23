import React, { forwardRef, useState } from "react"
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  IconButton,
  Snackbar,
  Grid,
  useTheme,
  Stack,
} from "@mui/material"
import { styled } from "@mui/system"
import { motion, AnimatePresence } from "framer-motion"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import SendIcon from "@mui/icons-material/Send"
import MuiAlert from "@mui/material/Alert"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const Section = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(15, 0),
  background: "linear-gradient(45deg, #121212 0%, #1a1a1a 100%)",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
}))

const DecorativeLine = styled(Box)({
  position: "absolute",
  left: 0,
  top: "50%",
  transform: "translateY(-50%)",
  height: "70%",
  width: "4px",
  background: "linear-gradient(to bottom, #d4af37, transparent)",
})

const ContactCard = styled(motion.div)(({ theme }) => ({
  background: "rgba(255, 255, 255, 0.02)",
  backdropFilter: "blur(10px)",
  borderRadius: "20px",
  padding: theme.spacing(6),
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.18)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
}))

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    borderRadius: "12px",
    transition: "all 0.3s ease",
  },
  "& .MuiInputLabel-root": {
    color: "#888",
    transform: "translate(14px, 18px) scale(1)",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "#d4af37",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#d4af37",
      boxShadow: "0 0 0 2px rgba(212, 175, 55, 0.2)",
    },
  },
}))

const SocialIcons = styled(Box)({
  display: "flex",
  justifyContent: "center",
  gap: "20px",
  marginTop: "40px",
})

const SubmitButton = styled(motion.button)(({ theme }) => ({
  padding: theme.spacing(1.5, 4),
  fontSize: "1rem",
  fontWeight: 600,
  background: "linear-gradient(45deg, #d4af37 0%, #f4d03f 100%)",
  color: "#121212",
  border: "none",
  borderRadius: "12px",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(212, 175, 55, 0.3)",
  },
}))

const textFieldSx = {
  "& .MuiInputBase-root": {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    color: "#fff",
    borderRadius: "12px",
  },
  "& .MuiInputLabel-root": {
    color: "#888",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: "2px",
    },
    "&:hover fieldset": {
      borderColor: "#d4af37",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#d4af37",
      boxShadow: "0 0 0 2px rgba(212, 175, 55, 0.2)",
    },
  },
}

const Alert = MuiAlert

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    location: "",
  })
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const theme = useTheme()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formData.message.trim()) {
      setSnackbarMessage("Please enter a message before sending")
      setOpenSnackbar(true)
      setIsSubmitting(false)
      return
    }

    const res = await fetch("https://formspree.io/f/mldjalvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (res.ok) {
      setSnackbarMessage("Message sent successfully!")
      setOpenSnackbar(true)
      setShowSuccess(true)
      setTimeout(() => setShowSuccess(false), 2000)
      setFormData({ name: "", email: "", message: "", phone: "", location: "" })
      setIsSubmitting(false)
    }
  }

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false)
  }

  return (
    <Section ref={ref} component="section" id="contact">
      <DecorativeLine />
      <Container maxWidth="lg">
        <Grid container spacing={8} alignItems="center">
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <Box sx={{ textAlign: "left", position: "relative" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "#fff",
                    mb: 4,
                    background: "linear-gradient(45deg, #d4af37, #f4d03f)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: 700,
                  }}
                >
                  Let's Connect
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#aaa",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    mb: 4,
                  }}
                >
                  "Have a unique spice blend in mind or just want to say hello?
                  Let’s craft something flavorful together. Get in touch with us
                  today!"
                </Typography>

                <Grid container spacing={2} sx={{ flexDirection: "row" }}>
                  <Box sx={{ mb: 4, mr: 12 }}>
                    <Typography variant="h6" sx={{ color: "#d4af37", mb: 2 }}>
                      Contact Info
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#888", mb: 1 }}>
                      📧 rn.enterprises741@gmail.com
                    </Typography>
                    <Typography variant="body1" sx={{ color: "#888" }}>
                      📞 +91-8057518857 , +91-9354456931
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <WhatsAppIcon />
                      <Typography variant="body1" sx={{ color: "#888" }}>
                        +91-8057518857 , +91-9354456931
                      </Typography>
                    </Stack>
                  </Box>
                  <Box sx={{ mb: 4 }}>
                    <Typography variant="h6" sx={{ color: "#d4af37", mb: 2 }}>
                      Follow Us
                    </Typography>
                    <SocialIcons>
                      {[
                        // { icon: <LinkedInIcon />, color: "#0077b5", link: "#" },
                        // { icon: <TwitterIcon />, color: "#1DA1F2", link: "#" },
                        {
                          icon: <InstagramIcon />,
                          color: "#E4405F",
                          link: "#",
                        },
                        { icon: <WhatsAppIcon />, color: "#25D366", link: "#" },
                      ].map((social, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <IconButton
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                              color: social.color,
                              background: "rgba(255, 255, 255, 0.05)",
                              backdropFilter: "blur(5px)",
                              "&:hover": {
                                background: "rgba(255, 255, 255, 0.1)",
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </motion.div>
                      ))}
                    </SocialIcons>
                  </Box>
                </Grid>
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <ContactCard>
                <Typography
                  align="center"
                  variant="h4"
                  sx={{ color: "#d4af37", mb: 4 }}
                >
                  Get in Touch
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid
                      item
                      xs={12}
                      container
                      spacing={2}
                      sx={{ justifyContent: "space-between" }}
                    >
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="name"
                          label="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                            style: {
                              color: "#d4af37", // Custom color for the label
                            },
                          }}
                          sx={{
                            ...textFieldSx,
                            "& .MuiInputBase-root": {
                              ...textFieldSx["& .MuiInputBase-root"],
                              height: "56px",
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="email"
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                            style: {
                              color: "#d4af37", // Custom color for the label
                            },
                          }}
                          sx={{
                            ...textFieldSx,
                            "& .MuiInputBase-root": {
                              ...textFieldSx["& .MuiInputBase-root"],
                              height: "56px",
                            },
                          }}
                        />
                      </Grid>
                    </Grid>

                    <Grid item xs={12} container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="phone"
                          label="Phone Number"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                            style: {
                              color: "#d4af37", // Custom color for the label
                            },
                          }}
                          sx={textFieldSx}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          name="location"
                          label="Location"
                          value={formData.location}
                          onChange={handleChange}
                          variant="outlined"
                          fullWidth
                          InputLabelProps={{
                            shrink: true,
                            style: {
                              color: "#d4af37", // Custom color for the label
                            },
                          }}
                          sx={textFieldSx}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sx={{ mt: 3 }}>
                    <TextField
                      name="message"
                      fullWidth
                      label="Your Message"
                      multiline
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      InputLabelProps={{
                        shrink: true,
                        style: {
                          color: "#d4af37", // Custom color for the label
                        },
                      }}
                      sx={textFieldSx}
                    />
                  </Grid>

                  <Grid item xs={12} sx={{ mt: 4 }}>
                    <Box sx={{ position: "relative", display: "inline-block" }}>
                      <SubmitButton
                        type="submit"
                        disabled={isSubmitting}
                        whileTap={{ scale: 0.95 }}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <SendIcon />
                            Send Message
                          </>
                        )}
                      </SubmitButton>

                      <AnimatePresence>
                        {showSuccess && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                            style={{
                              position: "absolute",
                              right: -40,
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            <CheckCircleIcon
                              sx={{ color: "#4CAF50", fontSize: 32 }}
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Box>
                  </Grid>
                </form>
              </ContactCard>
            </motion.div>
          </Grid>
        </Grid>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{
              background: "#2a2a2a",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.25)",
              "& .MuiAlert-icon": { color: "#d4af37" },
            }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Section>
  )
})

export default ContactSection
