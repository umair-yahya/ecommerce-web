import React from "react";

const Helmet = (props) => {
  document.title = "E-Mart -" + props.title;
  return <div>{props.children}</div>;
};

export default Helmet;
