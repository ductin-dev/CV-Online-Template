import { Fragment } from "react";

const RecentWorksWritter = () => {

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Works <span style={{ marginLeft: 5, fontSize: 14, fontWeight: 400, color: "gray" }}>|&nbsp;&nbsp;click each image for more detail</span></div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn`}
          // onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All
            </label>
          </div>
          {/* <div
            className={`f_btn ${activeBtn("photo")}`}
            onClick={handleFilterKeyChange("photo")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="photo" />
              Image
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("gallery")}`}
            onClick={handleFilterKeyChange("gallery")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="gallery" />
              Gallery
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("video")}`}
            onClick={handleFilterKeyChange("video")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="video" />
              Video
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("music")}`}
            onClick={handleFilterKeyChange("music")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="music" />
              Music
            </label>
          </div>
          <div
            className={`f_btn ${activeBtn("design")}`}
            onClick={handleFilterKeyChange("design")}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="design" />
              Content
            </label>
          </div> */}
        </div>
        {/* content */}
        <div className="row grid-items border-line-v">
          {/* FPT U */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="#popup-capstone" className="has-popup-media">
                  <img src="images/capstone2.jpg" alt="Mai Thi My Giang capstone at FPTU" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-capstone" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/capstone2.jpg" alt="Mai Thi My Giang capstone at FPTU" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>FPT University Da Nang</h1>
                        <div className="blog-detail">Working on advertisement fo...</div>
                        <div className="blog-content">
                          <p>
                            So striking at of to welcomed resolved. Northward by
                            described up household therefore attention.
                            Excellence decisively nay man yet impression for
                            contrasted remarkably.
                          </p>
                          <blockquote>
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Pellentesque
                            suscipit.
                          </blockquote>
                          <p>
                            Tiled say decay
                          </p>
                          <ul className="list-style">
                            <li>Greatest properly off ham exercise all.</li>
                            <li>
                              Unsatiable invitation its possession nor off.
                            </li>
                            <li>
                              All difficulty estimating unreserved increasing
                              the solicitude.
                            </li>
                          </ul>
                          <p>
                            Unpleasant astonished an diminution up partiality.
                            Noisy an their of meant. Death means up civil do an
                            offer wound of.
                          </p>
                        </div>
                        {/* <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a href="#popup-capstone" className="name has-popup-media">
                  FPT University
                </a>
                <div className="category">Capstone Project Team</div>
              </div>
            </div>
          </div>
          {/* Academy */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="#popup-fpt-academy"
                  className="has-popup-media"
                >
                  <img src="images/marketing.jpg" alt="Mai Thi My Giang with team at FPT Complex Academy" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
                <div id="popup-fpt-academy" className="popup-box mfp-fade mfp-hide">
                  <div className="content">
                    <div className="image">
                      <img src="images/marketing.jpg" alt="" />
                    </div>
                    <div className="desc">
                      <div className="post-box">
                        <h1>FPT Software Academy</h1>
                        <div className="blog-detail">Working on advertisement fo...</div>
                        <div className="blog-content">
                          <p>
                            So striking at of to welcomed resolved. Northward by
                            described up household therefore attention.
                            Excellence decisively nay man yet impression for
                            contrasted remarkably.
                          </p>
                          <blockquote>
                            Vestibulum ante ipsum primis in faucibus orci luctus
                            et ultrices posuere cubilia Curae; Pellentesque
                            suscipit.
                          </blockquote>
                          <p>
                            Tiled say decay
                          </p>
                          <ul className="list-style">
                            <li>Greatest properly off ham exercise all.</li>
                            <li>
                              Unsatiable invitation its possession nor off.
                            </li>
                            <li>
                              All difficulty estimating unreserved increasing
                              the solicitude.
                            </li>
                          </ul>
                          <p>
                            Unpleasant astonished an diminution up partiality.
                            Noisy an their of meant. Death means up civil do an
                            offer wound of.
                          </p>
                        </div>
                        {/* <a href="#" className="button">
                          <span className="text">View Project</span>
                          <span className="arrow" />
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="desc">
                <a
                  href="#popup-fpt-academy"
                  className="name has-popup-media"
                >
                  FPT Software Academy
                </a>
                <div className="category">My strong team</div>
              </div>
            </div>
          </div>


          {/* FPT Marketing */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/giang-avatar3.jpg" className="has-popup-image">
                  <img src="images/giang-avatar3.jpg" alt="Mai Thi My Giang at FPT Complex, Da Nang" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="images/giang-avatar3.jpg" className="name has-popup-image">
                  Seminar | Events
                </a>
                <div className="category">at FPT Complex, Da Nang</div>
              </div>
            </div>
          </div>
          {/* FPT Academy */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/giang-avatar2.jpg" className="has-popup-image">
                  <img src="images/giang-avatar2.jpg" alt="Mai Thi My Giang in recruiting events and seminars at FPT Complex, Da Nang" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="images/giang-avatar2.jpg" className="name has-popup-image">
                  Academy Recruiting Program
                </a>
                <div className="category">at FPT Complex, Da Nang</div>
              </div>
            </div>
          </div>
          {/* Event */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/event.jpg" className="has-popup-image">
                  <img src="images/event.jpg" alt="Mai Thi My Giang at a meeting after a Seminar hosted in Da Nang" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="images/event.jpg" className="name has-popup-image">
                  FPT Complex
                </a>
                <div className="category">a meeting after a Seminar hosted in Da Nang</div>
              </div>
            </div>
          </div>
          {/* Palm Design */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
            <div className="box-item">
              <div className="image">
                <a
                  href="#"
                  className=""
                >
                  <img src="images/no-image/twork2.jpg" alt="" style={{ height: 150 }} />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="#" className="name">
                  Palm Design
                </a>
                <div className="category">No image yet</div>
              </div>
            </div>
          </div>
          {/* FPT U */}
          <div className="col col-d-6 col-t-6 col-m-12 grid-item design border-line-h">
            <div className="box-item">
              <div className="image">
                <a href="images/capstone1.jpg" className="has-popup-image">
                  <img src="images/capstone1.jpg" alt="Mai Thi My Giang capstone at FPTU" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="images/capstone1.jpg" className="name has-popup-image">
                  FPT University
                </a>
                <div className="category">FPT University</div>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default RecentWorksWritter;
