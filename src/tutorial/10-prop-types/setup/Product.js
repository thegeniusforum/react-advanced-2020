import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  return (
    <article className="product">
      <img src={image ? image.url : "myUrl"}></img>
      <h4>{name}</h4>
      <p>${(price && price) || 3.99}</p>
    </article>
  );
};

// Product.propTypes = {
//   image: PropTypes.object.isRequired,
//   name: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
// };

Product.defaultProps = {
  name: "default value",
  price: 3.99,
  image: { url: defaultImage },
};

export default Product;
