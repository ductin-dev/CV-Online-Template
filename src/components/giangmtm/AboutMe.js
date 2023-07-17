import { Fragment } from "react";
const bio = ` <p>
<strong>Hello, my name is Giang! Cooperation, Committed, and Enthusiastic </strong>
are 3 words that people often describe me. I specialize in writing, planning, and branding for internal product also out-source projects.
Currently, I’m looking forward to a company where I not only stick for a
long time but also contribute all my skills to help their business grows.
</p>`;
const AboutMe = ({ callIconStyle }) => {

  return (
    <Fragment>
      <div className="content about">
        {/* title */}
        <div className="title">
          <span className="first-word">About</span> Me
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div
              className="text-box"
              dangerouslySetInnerHTML={{ __html: bio }}
              style={{ textAlign: "justify" }}
            ></div>
          </div>
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li>
                  <strong>Birthday . . . .</strong> Jan-2000
                </li>
                <li>
                  <strong>Overall EXP . . . .</strong> 2 years
                </li>
                <li>
                  <strong>FullTime . . . .</strong> Available
                </li>
                <li>
                  <strong>Freelance . . . .</strong> Available
                </li>
                <li>
                  <strong>Address . . . .</strong> Da Nang
                </li>
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default AboutMe;
