import { Fragment, useContext } from "react";
import BlogPostNew, { BlogPostClassic } from "../components/giangmtm/BlogPost";
import Context from "../context/context";
const ContentContainer = ({ children, blog }) => {
  const { nav } = useContext(Context);
  return (
    <Fragment>
      {nav === "blog-post-giang" ? (
        blog === "classic" ? (
          <BlogPostClassic />
        ) : (
          <BlogPostNew />
        )
      ) : (
        <Fragment>{children}</Fragment>
      )}
    </Fragment>
  );
};
export default ContentContainer;
