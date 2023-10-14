import React from "react";
import Carousel from "react-material-ui-carousel";
import Item from "./Item";

function Slider(props) {
  var items = [
    {
      image:
        "https://media.istockphoto.com/id/1404654875/photo/various-vintage-jackets-on-clothing-rack-in-second-hand-store.jpg?s=1024x1024&w=is&k=20&c=mle4SUfvACu9SqC0DoyY7H6RprTv5C_YliUblBd9xdg=",
    },
    {
      image:
        "https://media.istockphoto.com/id/1342188418/photo/blouses-on-hanger.jpg?s=1024x1024&w=is&k=20&c=K3rEIIMLXHiEPPeew2bXAY-AMthFYtfhZD6n9lfsea0=",
    },
    {
      image:
        "https://media.istockphoto.com/id/1431849719/photo/plenty-of-sweatshirts-in-different-colors-on-the-shelf.jpg?s=1024x1024&w=is&k=20&c=CLgWBX8H40NBhYyF28ty6689StOXUJ909hyFXsL_-l0=",
    },
    {
      image:
        "https://media.istockphoto.com/id/1396160859/photo/baby-and-child-clothes-toys-in-box-second-hand-apparel-idea-circular-fashion-donation-charity.jpg?s=1024x1024&w=is&k=20&c=JnEjRrvs72BGkdHZbD_Bs9-LfqzeDb8zFrU1XkJ3N-k=",
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default Slider;
