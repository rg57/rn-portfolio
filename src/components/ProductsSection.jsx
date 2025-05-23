import React, { useRef, forwardRef } from "react"
import {
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  IconButton,
  Chip,
  Stack,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material"
import { styled } from "@mui/system"
import { motion } from "framer-motion"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import PlaceIcon from "@mui/icons-material/Place"
import { products } from "../utils/products"

const ProductSection = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  backgroundColor: "#1a1a1a",
  width: "100%",
  position: "relative",
}))

const ProductsContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  maxWidth: "100%",
  padding: "0 16px", // Small margin left and right
  margin: "0 auto",
  position: "relative",
}))

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "24px",
  paddingBottom: "20px",
  width: "100%",
  overflowX: "auto",
  scrollBehavior: "smooth",
  "&::-webkit-scrollbar": {
    height: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: "#333",
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#e0c066",
    borderRadius: "4px",
  },
  scrollbarWidth: "thin",
  scrollbarColor: "#e0c066 #333",
  padding: "10px 0", // Add padding to prevent cut-off shadows
}))

const NavButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "#e0c066",
  zIndex: 10,
  "&:hover": {
    backgroundColor: "rgba(224, 192, 102, 0.2)",
  },
}))

const ProductCard = styled(Card)(({ theme }) => ({
  width: "320px",
  height: "auto",
  background: "linear-gradient(145deg, #262626, #1e1e1e)",
  borderRadius: "16px",
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
  overflow: "hidden",
  flexShrink: 0,
  transition: "transform 0.3s, box-shadow 0.3s",
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 24px rgba(224, 192, 102, 0.3)",
  },
}))

const ProductContent = styled(CardContent)({
  color: "#fff",
  padding: "20px",
})

const PriceChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#e0c066",
  color: "#1a1a1a",
  fontWeight: "bold",
  fontSize: "0.9rem",
  height: "32px",
}))

const MoqChip = styled(Chip)({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "#fff",
  height: "32px",
})

// Adding forwardRef to make it compatible with your App.jsx refs
const Products = forwardRef(({ refs, scrollToSection }, ref) => {
  const scrollContainerRef = useRef(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" })
    }
  }

  return (
    <ProductSection ref={refs.productsRef}>
      <ProductsContainer>
        <Typography
          variant="h3"
          component={motion.h3}
          sx={{
            color: "#e0c066",
            textAlign: "center",
            mb: 5,
            fontWeight: "bold",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-15px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "80px",
              height: "3px",
              background: "#e0c066",
            },
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Premium Spices
        </Typography>

        {!isMobile && (
          <>
            <NavButton
              onClick={scrollLeft}
              sx={{ left: { xs: "5px", md: "20px" } }}
              aria-label="Scroll left"
            >
              <ArrowBackIosNewIcon />
            </NavButton>
            <NavButton
              onClick={scrollRight}
              sx={{ right: { xs: "5px", md: "20px" } }}
              aria-label="Scroll right"
            >
              <ArrowForwardIosIcon />
            </NavButton>
          </>
        )}

        <ScrollContainer ref={scrollContainerRef}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProductCard>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  sx={{
                    objectFit: "cover",
                    transition: "transform 0.5s",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <ProductContent>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#e0c066",
                      mb: 1,
                      fontWeight: 600,
                      whiteSpace: "normal",
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#ddd",
                      mb: 2,
                      fontSize: "0.9rem",
                      height: "60px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "normal",
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {product.description}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 1.5 }}
                  >
                    <PlaceIcon sx={{ color: "#e0c066", fontSize: "1rem" }} />
                    <Typography
                      variant="body2"
                      sx={{ color: "#bbb", fontSize: "0.85rem" }}
                    >
                      India
                      {/* {product.origin} */}
                    </Typography>
                  </Stack>

                  {/* <Box sx={{ mb: 2 }}>
                    {product.certificates &&
                      product.certificates.length > 0 && (
                        <Stack
                          direction="row"
                          spacing={0.5}
                          flexWrap="wrap"
                          gap={0.5}
                        >
                          {product.certificates.slice(0, 2).map((cert, idx) => (
                            <Chip
                              key={idx}
                              icon={
                                <VerifiedIcon
                                  sx={{ fontSize: "0.8rem !important" }}
                                />
                              }
                              label={cert}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(224, 192, 102, 0.15)",
                                color: "#e0c066",
                                fontSize: "0.7rem",
                                height: "24px",
                              }}
                            />
                          ))}
                          {product.certificates.length > 2 && (
                            <Chip
                              label={`+${product.certificates.length - 2}`}
                              size="small"
                              sx={{
                                backgroundColor: "rgba(255, 255, 255, 0.05)",
                                color: "#bbb",
                                fontSize: "0.7rem",
                                height: "24px",
                              }}
                            />
                          )}
                        </Stack>
                      )}
                  </Box> */}

                  <Stack
                    direction="row"
                    spacing={1}
                    justifyContent="space-between"
                    sx={{ mt: "auto" }}
                  >
                    <Stack direction="column" spacing={1} alignItems="center">
                      <PriceChip
                        label={`₹${product.price.inr}`}
                        // label={`$${product.price.usd} / ₹${product.price.inr}`}
                      />
                      <Typography fontSize={12} color="#e0c066">
                        Prices may vary
                      </Typography>
                    </Stack>
                    <MoqChip label={`MOQ: ${product.moq}`} variant="outlined" />
                  </Stack>

                  <Box
                    sx={{ mt: 2, display: "flex", justifyContent: "center" }}
                  >
                    <Button
                      onClick={() => scrollToSection(refs.contactRef)}
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "#e0c066",
                        borderColor: "#e0c066",
                        height: "45px",
                        width: "170px",
                        fontWeight: "bold",
                        fontSize: "0.8rem",
                        "&:hover": {
                          backgroundColor: "#e0c066",
                          color: "#1a1a1a",
                        },
                      }}
                    >
                      Contact Us
                    </Button>
                  </Box>
                </ProductContent>
              </ProductCard>
            </motion.div>
          ))}
        </ScrollContainer>
      </ProductsContainer>
    </ProductSection>
  )
})

export default Products
