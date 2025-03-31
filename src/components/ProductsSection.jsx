import React, { forwardRef } from "react"
import {
  Container,
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

const Section = styled(Box)({
  minHeight: "100vh",
  padding: "100px 0",
  backgroundColor: "#121212",
  textAlign: "center",
})

const ProductCard = styled(motion(Card))({
  backgroundColor: "#1e1e1e",
  color: "#fff",
  borderRadius: "12px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(212,175,55,0.3)",
  },
})

const products = [
  {
    name: "Teja S17",
    desc: "A fiery variety with intense heat and a deep red hue, ideal for bold dishes.",
  },
  {
    name: "Armour",
    desc: "Rich in flavor with a perfect balance of spice, a premium choice.",
  },
  {
    name: "Guntur s4",
    desc: "Subtle heat with a robust aroma, versatile for gourmet cooking.",
  },
]

const ProductsSection = forwardRef((props, ref) => {
  return (
    <Section ref={ref}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#d4af37",
            fontWeight: "bold",
          }}
        >
          <ShoppingCartIcon sx={{ mr: 2 }} /> Our Premium Red Chillies
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{ flexDirection: "row" }}
        >
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.name}>
              <ProductCard
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                elevation={5}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    sx={{ color: "#d4af37", fontWeight: "bold" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body1" sx={{ mt: 2 }}>
                    {product.desc}
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      marginTop: "16px",
                      backgroundColor: "#d4af37",
                      color: "#000",
                      fontWeight: "bold",
                      "&:hover": { backgroundColor: "#b8962e" },
                    }}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  )
})

export default ProductsSection
