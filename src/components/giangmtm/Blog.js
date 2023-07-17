import { Fragment, useContext } from "react";
import Context from "../../context/context";

const BlogSection = () => {
  const { changeNav } = useContext(Context);
  return (
    <Fragment>
      <div className="content blog">
        {/* title */}
        <div className="title">
          <span>Blog</span>
        </div>
        {/* content */}
        <div className="row border-line-v">
          {/* blog item */}
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post-giang")}>
                  <img
                    src="images/blog/blog1.jpg"
                    alt="Blog alt 1"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" onClick={() => changeNav("blog-post-giang")}>
                  <span className="date">April 17, 2023</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post-giang")}
                  className="name"
                >
                  Làm thế nào để viết content tuyển JUNIOR DEV chuẩn SEO
                </a>
                <div className="text">
                  <p>
                    Lại là mình, Begi đây, hôm nay mình sẽ hướng dẫn cho các bạn cách để viết một
                    bài trên fanpage để thu hút nhiều Junior dev apply vào công ty của bạn nhấ…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post-giang")}>
                  <img
                    src="images/blog/blog1.jpg"
                    alt="Blog alt 1"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" onClick={() => changeNav("blog-post-giang")}>
                  <span className="date">April 17, 2023</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post-giang")}
                  className="name"
                >
                  Làm thế nào để viết content tuyển JUNIOR DEV chuẩn SEO
                </a>
                <div className="text">
                  <p>
                    Lại là mình, Begi đây, hôm nay mình sẽ hướng dẫn cho các bạn cách để viết một
                    bài trên fanpage để thu hút nhiều Junior dev apply vào công ty của bạn nhấ…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post-giang")}>
                  <img
                    src="images/blog/blog1.jpg"
                    alt="Blog alt 1"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" onClick={() => changeNav("blog-post-giang")}>
                  <span className="date">April 17, 2023</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post-giang")}
                  className="name"
                >
                  Làm thế nào để viết content tuyển JUNIOR DEV chuẩn SEO
                </a>
                <div className="text">
                  <p>
                    Lại là mình, Begi đây, hôm nay mình sẽ hướng dẫn cho các bạn cách để viết một
                    bài trên fanpage để thu hút nhiều Junior dev apply vào công ty của bạn nhấ…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12">
            <div className="box-item">
              <div className="image">
                <a href="#" onClick={() => changeNav("blog-post-giang")}>
                  <img
                    src="images/blog/blog1.jpg"
                    alt="Blog alt 1"
                  />
                  <span className="info">
                    <span className="ion ion-document-text" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" onClick={() => changeNav("blog-post-giang")}>
                  <span className="date">April 17, 2023</span>
                </a>
                <a
                  href="#"
                  onClick={() => changeNav("blog-post-giang")}
                  className="name"
                >
                  Làm thế nào để viết content tuyển JUNIOR DEV chuẩn SEO
                </a>
                <div className="text">
                  <p>
                    Lại là mình, Begi đây, hôm nay mình sẽ hướng dẫn cho các bạn cách để viết một
                    bài trên fanpage để thu hút nhiều Junior dev apply vào công ty của bạn nhấ…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
        <div className="pager">
          <nav className="navigation pagination">
            <div className="nav-links">
              <span className="page-numbers current">1</span>
              <a className="page-numbers" href="#">
                2
              </a>
              <a className="next page-numbers" href="#">
                Next
              </a>
            </div>
          </nav>
        </div>
      </div>
    </Fragment>
  );
};
export default BlogSection;