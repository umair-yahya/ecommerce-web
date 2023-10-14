import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductCard({ item }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        image: item.imgUrl,
      })
    );
    toast.success("Product Added successfully");
  };
  return (
    <Card
      sx={{ maxWidth: 345 }}
      style={{
        width: "50%",
        height: "300px",
        marginTop: "20px",
      }}
    >
      <CardMedia sx={{ height: 140 }} image={item.imgUrl} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link to={`/shop/${item.id}`} style={{ textDecoration: "none" }}>
            {item.productName}
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{item.price + " $"}</Button>
        <Button size="small" onClick={addToCart}>
          Add To Cart
        </Button>
      </CardActions>
    </Card>
  );
}
