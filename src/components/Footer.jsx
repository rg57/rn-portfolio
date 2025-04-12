import React from "react"
import { Box, Typography, Link } from "@mui/material"

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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          mt: 2,
        }}
      >
        <Link
          href="/terms-and-conditions"
          color="#d4af37"
          underline="hover"
          sx={{ fontSize: "0.9rem" }}
        >
          Terms & Conditions
        </Link>
        <Link
          href="https://sites.google.com/view/rn-privacypolicy/home"
          color="#d4af37"
          underline="hover"
          sx={{ fontSize: "0.9rem" }}
        >
          Privacy Policy
        </Link>
        <Link
          href="/shipping-policy"
          color="#d4af37"
          underline="hover"
          sx={{ fontSize: "0.9rem" }}
        >
          Shipping Policy
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
