import React, { useState } from "react";
import Helmet from "../Helmet/Helmet";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import products from "../assets/products";
import ProductList from "../UI/ProductList";
import Typography from "@mui/material/Typography";

const Shop = () => {
  const [productsData, setProductsData] = useState(products);

  const handleChange = (event) => {
    const filterVal = event.target.value;
    if (filterVal === "grocery") {
      const filterProducts = products.filter(
        (item) => item.category === "grocery"
      );
      setProductsData(filterProducts);
    }
    if (filterVal === "mobile") {
      const filterProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filterProducts);
    }
  };

  const handleSearch = (event) => {
    const searchItem = event.target.value;
    const searchProduct = products.filter((item) =>
      item.productName.toLowerCase().includes(searchItem)
    );
    console.log(searchProduct);
    setProductsData(searchProduct);
  };

  const sortValue = (event) => {
    const filterVal = event.target.value;
    if (filterVal === "ascending") {
      const ascendingVal = products.sort();
      setProductsData(ascendingVal);
      console.log(ascendingVal);
    }
    if (filterVal === "decending") {
      const decendingVal = products.reverse();
      setProductsData(decendingVal);
      console.log(decendingVal);
    }
  };

  return (
    <Helmet title="Shop">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "#b3c7a9",
          marginTop: "10px",
          borderRadius: "100px 100px 100px 100px",
        }}
      >
        <div>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-select-native">
              Filter
            </InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              onChange={handleChange}
            >
              <option aria-label="None" value="" />
              <option value={"grocery"}>Grocery</option>
              <option value={"mobile"}>Mobile</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1 }} variant="standard">
            <InputLabel htmlFor="demo-customized-select-native">
              Sort
            </InputLabel>
            <NativeSelect
              id="demo-customized-select-native"
              onChange={sortValue}
            >
              <option aria-label="None" value="" />
              <option value={"ascending"}>Ascending</option>
              <option value={"decending"}>Decending</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div style={{ paddingTop: "8px" }}>
          <TextField
            id="standard-basic"
            label="Search"
            variant="standard"
            onChange={handleSearch}
          />
        </div>
      </div>
      <div>
        {productsData.length === 0 ? (
          <Typography
            variant="h3"
            component="h2"
            style={{ textAlign: "center", padding: "50px", color: "blue" }}
          >
            No Products Found !
          </Typography>
        ) : (
          <ProductList data={productsData} />
        )}
      </div>
    </Helmet>
  );
};

export default Shop;
