import React from "react";
import { Paper, Button } from "@mui/material";

function Item({ item }) {
  return (
    <Paper>
      <img src={item.image} width={"100%"} height={"700px"} />
    </Paper>
  );
}

export default Item;
