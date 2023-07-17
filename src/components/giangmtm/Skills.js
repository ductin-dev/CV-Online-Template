import { Fragment } from "react";

const Slice = () => (
  <div className="slice">
    <div className="bar" />
    <div className="fill" />
  </div>
);

const Skills = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">My Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-paint-brush" />
                </div>
                <div className="name">General</div>
              </div>
              <ul>
                <li>
                  <div className="name">CV Analysis</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Team work</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Content Writing</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Event Hosting</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "70%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">English</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "80%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Chinese</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "50%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list circles">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <div className="name">Admin</div>
              </div>
              <ul>
                <li>
                  <div className="name">SEO</div>
                  <div className="progress p90">
                    <span>90%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Event</div>
                  <div className="progress p75">
                    <span>75%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Coding</div>
                  <div className="progress p85">
                    <span>85%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Finacial</div>
                  <div className="progress p95">
                    <span>95%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div> */}
          {/* skill item */}
          {/* <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Event hosting</div>
                </li>
                <li>
                  <div className="name">Create logo design</div>
                </li>
                <li>
                  <div className="name">Design for print</div>
                </li>
                <li>
                  <div className="name">Advertising services</div>
                </li>
                <li>
                  <div className="name">Search engine marketing</div>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Skills;
