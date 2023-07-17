import ActiveSection from "../activeSection";

const Achieve = ({ children, animationIn, animationOut }) => {
  return (
    <div
      className={ActiveSection("achieve", animationIn, animationOut)}
      id="achieve"
    >
      <div className="card-wrap">{children}</div>
    </div>
  );
};
export default Achieve;
