import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "background.paper",
        justifyContent: "space-around",
        borderRadius: 1,
        backgroundColor: "#2b2b2b",
        height: "200px",
      }}
    >
      <Box style={{ width: "20%", color: "white" }}>
        <img
          src="https://www.logo.wine/a/logo/E-mart/E-mart-Logo.wine.svg"
          width="100%"
          height="70px"
        />
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem aliquid enim quasi quos aliquam atque omnis nulla rerum
        </Typography>
      </Box>
      <Box>
        <h2>Top Categories</h2>
        <div>
          <Link style={{ textDecoration: "none", color: "white" }}>
            <h3>Grocery</h3>
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none", color: "white" }}>
            <h3>Mobile</h3>
          </Link>
        </div>
        <div>
          <Link style={{ textDecoration: "none", color: "white" }}>
            <h3>Grocery</h3>
          </Link>
        </div>
      </Box>
      <Box>
        <Box>
          <h2>UseFul Links</h2>
          <div>
            <Link style={{ textDecoration: "none", color: "white" }} to="/shop">
              <h3>Shop</h3>
            </Link>
          </div>
          <div>
            <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
              <h3>Cart</h3>
            </Link>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/login"
            >
              <h3>Login</h3>
            </Link>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
