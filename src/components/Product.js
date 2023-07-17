import ActiveSection from "../activeSection";
const Product = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("product", animationIn, animationOut)}
      id="product"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Product;
