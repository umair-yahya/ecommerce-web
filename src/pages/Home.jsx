import React, { useState, useEffect } from "react";
import Helmet from "../Helmet/Helmet";
import Slider from "./Slider/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ProductList from "../UI/ProductList";
import products from "../assets/products";

const Home = () => {
  const [trendingProducts, setrendingProducts] = useState([]);
  const [bestProducts, setbestProducts] = useState([]);
  useEffect(() => {
    const filterProducts = products.filter(
      (item) => item.category === "grocery"
    );
    const filterBestProducts = products.filter(
      (item) => item.category === "mobile"
    );
    setrendingProducts(filterProducts);
    setbestProducts(filterBestProducts);
  }, []);
  return (
    <Helmet title="Home">
      <Slider />
      <Box>
        <Typography variant="h3" component="h2" style={{ textAlign: "center" }}>
          Trending Products
        </Typography>
      </Box>
      <ProductList data={trendingProducts} />
      <Box>
        <Typography variant="h3" component="h2" style={{ textAlign: "center" }}>
          Best Products
        </Typography>
      </Box>
      <ProductList data={bestProducts} />
    </Helmet>
  );
};

export default Home;
