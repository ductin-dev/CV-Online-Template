import { Fragment } from "react";
import ActiveSection from "../activeSection";
const Product = ({ children, animationIn, animationOut }) => {
  return (
    <Fragment>
      <div
        className={ActiveSection("product", animationIn, animationOut)}
        id="product"
      >
        <div className="card-wrap">{children}</div>
      </div>
    </Fragment>
  );
};
export default Product;
