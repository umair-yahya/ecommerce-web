import React, { useState } from "react";
import products from "../assets/products";
import Helmet from "../Helmet/Helmet";
import { useParams } from "react-router";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductList from "../UI/ProductList";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import "react-toastify/dist/ReactToastify.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [reviewVal, setReviewVal] = useState({
    userName: "",
    rating: "",
    reviewProduct: "",
  });
  const productFind = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    review,
    description,
    shortDesc,
    category,
  } = productFind;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        image: imgUrl,
        productName,
        price,
      })
    );
    toast.success("Product Added successfully");
  };
  const relatedProducts = products.filter((item) => item.category === category);

  const ratingVal = () => {
    console.log(reviewVal);
    toast.success("Review Submitted");
  };
  return (
    <Helmet title="Product Details">
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box style={{ width: "50%", padding: "50px" }}>
          <img src={imgUrl} width={"70%"} height={"400px"} />
        </Box>
        <Box style={{ width: "30%" }}>
          <h1>{productName}</h1>
          <Stack spacing={1}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </Stack>
          <h3>({avgRating} rating)</h3>
          <h3>{price}$</h3>
          <p>{shortDesc}</p>
          <Button variant="contained" onClick={addToCart}>
            Add to cart
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          width: 1000,
          padding: "30px",
        }}
      >
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          Leave Your Experience
        </Typography>
        <Box style={{ paddingTop: "30px" }}>
          <TextField
            fullWidth
            label="Enter Name"
            id="fullWidth"
            color="secondary"
            onChange={(e) => {
              reviewVal.userName = e.target.value;
            }}
          />
        </Box>
        <Typography variant="h5" style={{ paddingTop: "10px" }}>
          Rating:
          <Rating
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
            onChange={(e) => {
              reviewVal.rating = e.target.value;
            }}
          />
        </Typography>
        <Box style={{ paddingTop: "20px" }}>
          <TextField
            fullWidth
            label="Review Product"
            id="fullWidth"
            color="secondary"
            onChange={(e) => {
              reviewVal.reviewProduct = e.target.value;
            }}
          />
        </Box>
        <Box style={{ paddingTop: "10px" }}>
          <Button variant="contained" size="large" onClick={ratingVal}>
            Submit
          </Button>
        </Box>
      </Box>
      <Box sx={{ borderTop: 1, borderColor: "secondary.main" }}>
        <Typography
          variant="h4"
          style={{
            textAlign: "center",
            color: "blue",
            textDecoration: "underline",
          }}
        >
          You May Also Like
        </Typography>
        <ProductList data={relatedProducts} />
      </Box>
    </Helmet>
  );
};

export default ProductDetails;
