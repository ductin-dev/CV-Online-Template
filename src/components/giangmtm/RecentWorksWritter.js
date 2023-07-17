import { Fragment } from "react";

import styles from "./styles.module.css";

const RecentWorksWritter = () => {

  return (
    <Fragment>
      <div className="content works">
        {/* title */}
        <div className="title">Recent Works <span className={styles.text_divide}>|</span><span style={{ marginLeft: 5, fontSize: 14, fontWeight: 400, color: "gray" }}>click each image for more detail</span></div>
        {/* filters */}
        <div className="filter-menu filter-button-group">
          <div
            className={`f_btn`}
          >
            <label>
              <input type="radio" name="fl_radio" defaultValue="grid-item" />
              All | Total of 6
            </label>
          </div>
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
                        <blockquote>
                          FPT University is an excellent institution for those who are interested in studying information technology and computer science.
                        </blockquote>
                        <div className="blog-detail">FPT University is an excellent institution. I had the opportunity to study here for a time...</div>
                        <div className="blog-content">
                          <p>
                            I learned many necessary skills and knowledge to start my career, and the professors and staff were very supportive throughout my time there.
                          </p>
                          <p>
                            Some special things I have experienced.
                          </p>
                          <ul className="list-style">
                            <li>Chance to work on various projects with other students.</li>
                            <li>
                              Apply what I learned in the classroom to real-world situations.
                            </li>
                            <li>
                              Join many clubs/small contest to improve team-work and soft-skills.
                            </li>
                          </ul>
                        </div>
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
                        <blockquote>
                          FPT Software Academy is a place offers unlimited career opportunities and a professional training environment according to international standards.
                        </blockquote>
                        <div className="blog-detail">I had the chance to work and experience a professional, creative, and challenging working environment here...</div>
                        <div className="blog-content">
                          <p>
                            Work here was a valuable experience for me, where I developed my skills, worked with a talented team, and gained exposure, my ideas and creative contents to various projects and events.
                          </p>
                          <p>
                            This place taught me many valuable lessons about teamwork, communication, problem-solving, and time management. It was a challenging experience, but I am grateful for it because it helped me become a better professional and prepared me for future challenges in my career.
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
                  <img src="images/event.jpg" alt="Immersing the International Women's Day with the team at FComplex" />
                  <span className="info">
                    <span className="ion ion-images" />
                  </span>
                </a>
              </div>
              <div className="desc">
                <a href="images/event.jpg" className="name has-popup-image">
                  FPT Complex
                </a>
                <div className="category">Immersing the International Women's Day with the team at FComplex</div>
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
