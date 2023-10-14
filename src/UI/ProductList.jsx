import React from "react";
import ProductCard from "./ProductCard";
import Box from "@mui/material/Box";
import ProductDetails from "../pages/ProductDetails";

const ProductList = ({ data }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        p: 1,
        m: 1,
        bgcolor: "background.paper",
        justifyContent: "space-evenly",
        borderRadius: 1,
      }}
    >
      {data.map((item, index) => {
        return <ProductCard item={item} key={index} />;
      })}
    </Box>
  );
};

export default ProductList;
