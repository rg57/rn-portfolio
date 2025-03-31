import React from "react"
import { Box, Typography } from "@mui/material"

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        color: "#d4af37",
        textAlign: "center",
        padding: "40px 20px",
        borderTop: "2px solid #d4af37",
        mt: "auto",
      }}
    >
      <Typography
        variant="body1"
        sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
      >
        © 2025 RN Enterprises. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{ mt: 1, fontSize: "1rem" }}>
        Premium Spices | Crafted with Excellence
      </Typography>
    </Box>
  )
}

export default Footer
