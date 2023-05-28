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
                <div className="name">Design</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Web Design</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Write Music</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "65%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Photoshop</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Graphic Design</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
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
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">German</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Italian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "30%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list circles">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-code" />
                </div>
                <div className="name">Coding</div>
              </div>
              <ul>
                <li>
                  <div className="name">WordPress</div>
                  <div className="progress p90">
                    <span>90%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">PHP / MYSQL</div>
                  <div className="progress p75">
                    <span>75%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">Angular / JavaScript</div>
                  <div className="progress p85">
                    <span>85%</span>{" "}
                    <div className="slice">
                      <div className="bar" />
                      <div className="fill" />
                    </div>
                  </div>
                </li>
                <li>
                  <div className="name">HTML / CSS</div>
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
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Website hosting</div>
                </li>
                <li>
                  <div className="name">iOS and android apps</div>
                </li>
                <li>
                  <div className="name">Create logo design</div>
                </li>
                <li>
                  <div className="name">Design for print</div>
                </li>
                <li>
                  <div className="name">Modern and mobile-ready</div>
                </li>
                <li>
                  <div className="name">Advertising services include</div>
                </li>
                <li>
                  <div className="name">Graphics and animations</div>
                </li>
                <li>
                  <div className="name">Search engine marketing</div>
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
export default Skills;

export const SkillsFitness = () => {
  const skills = [
    { href: "", image: "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png", name: "Javascript" },
    { href: "", image: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png", name: "Typescript" },
    { href: "", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", name: "ReactJs, React native" },
    { href: "", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", name: "Angular" },
    { href: "", image: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png", name: "Docker" },
    { href: "", image: "https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png", name: "NextJs" },
    { href: "", image: "https://docs.nestjs.com/assets/logo-small.svg", name: "NestJs" },
    { href: "", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png", name: "GraphQL" },
  ]

  const skillRelates = "Git, Firebase, Database, VPS Cloud, Figma..."
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="content clients p-2" style={{ padding: '4%' }}>
            {/* content */}
            <div className="row client-items">
              {/* client item */}
              {skills.map((item) => (
                <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
                  <div className="">
                    <div className="image">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={item.href}
                      >
                        <img src={item.image} width={35} height={35} alt="" />
                      </a>
                    </div>
                    <div>
                      <p className="" style={{ fontSize: '11px' }}>{item.name}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="clear" />
            </div>
            <div className="moreskills">
              <h6>There are also some related skills: </h6>
              <p>{skillRelates}</p>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list dotted">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-flag" />
                </div>
                <div className="name">Languages</div>
              </div>
              <ul>
                <li className="border-line-h">
                  <div className="name">Vietnamese</div>
                  {/* <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div> */}
                </li>
                <li className="border-line-h">
                  <div className="name">Good at English</div>
                  {/* <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div> */}
                </li>

              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Object-oriented programming, Singleton, Mvc architecture, Java, Spring boot...</div>
                </li>
                <li>
                  <div className="name">HTML, CSS, Sass, Javascript, Typescript, ReactJs, React Native, Angular, NextJs
                  </div>
                </li>
                <li>
                  <div className="name">MySQL, SQL, MongoDB
                  </div>
                </li>
                <li>
                  <div className="name">Git, Jira...
                  </div>
                </li>
                {/* <li>
                  <div className="name">Faster exercise</div>
                </li>
                <li>
                  <div className="name">Bodybuilding</div>
                </li>
                <li>
                  <div className="name">Fitness training</div>
                </li>
                <li>
                  <div className="name">Cardio training</div>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export const SkillsLawyer = () => {
  return (
    <Fragment>
      <div className="content skills">
        {/* title */}
        <div className="title">Skills</div>
        {/* content */}
        <div className="row">
          {/* skill item */}
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="skills-list">
              <ul>
                <li className="border-line-h">
                  <div className="name">Oral Communication</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Written Communication</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "65%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Analytical and Logical Reasoning</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "75%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">Legal Research</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "85%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list dotted">
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
                    <div className="percentage" style={{ width: "90%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">German</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "60%" }} />
                  </div>
                </li>
                <li className="border-line-h">
                  <div className="name">Italian</div>
                  <div className="progress">
                    <div className="percentage" style={{ width: "30%" }} />
                  </div>
                </li>
                <li>
                  <div className="name">French</div>
                  <div className="progress ">
                    <div className="percentage" style={{ width: "70%" }} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* skill item */}
          <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
            <div className="skills-list list">
              <div className="skill-title border-line-h">
                <div className="icon">
                  <i className="fa fa-list" />
                </div>
                <div className="name">Knowledge</div>
              </div>
              <ul>
                <li>
                  <div className="name">Client Service</div>
                </li>
                <li>
                  <div className="name">Technology Skills</div>
                </li>
                <li>
                  <div className="name">Knowledge of Substantive Law</div>
                </li>
                <li>
                  <div className="name">Legal Procedure</div>
                </li>
                <li>
                  <div className="name">Organization</div>
                </li>
                <li>
                  <div className="name">Teamwork</div>
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

export const SkillsWritter = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">Skills</div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="skills-list">
            <ul>
              <li className="border-line-h">
                <div className="name">The Ability to Communicate</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">The Power of Observation</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Reasoning and Problem Solving</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Knowledge of Grammar, Spelling</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list dotted">
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
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">German</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "60%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Italian</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "30%" }} />
                </div>
              </li>
              <li>
                <div className="name">French</div>
                <div className="progress ">
                  <div className="percentage" style={{ width: "70%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Adaptability</div>
              </li>
              <li>
                <div className="name">Strong Research Skills</div>
              </li>
              <li>
                <div className="name">The Ability to Get Focused</div>
              </li>
              <li>
                <div className="name">Communicate</div>
              </li>
              <li>
                <div className="name">The Ability to Meet Deadlines</div>
              </li>
              <li>
                <div className="name">Organizational Skills</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsMusican = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">Skills</div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="skills-list">
            <ul>
              <li className="border-line-h">
                <div className="name">Motivation / Determination</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Violin Expertise</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Creativity</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Guitar Expertise</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-music" />
              </div>
              <div className="name">Read Music</div>
            </div>
            <ul>
              <li>
                <div className="name">Chords</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Intervals</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Melody</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Pitch</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">A Tight Sense of Rhythm</div>
              </li>
              <li>
                <div className="name">Rhythm is the heartbeat of all music</div>
              </li>
              <li>
                <div className="name">An Accurate Sense of Pitch</div>
              </li>
              <li>
                <div className="name">The Ability to “Jam”</div>
              </li>
              <li>
                <div className="name">An Ability to “Talk Music”</div>
              </li>
              <li>
                <div className="name">Singing in Tune</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsPhotographer = () => {
  return (
    <div className="content skills">
      {/* title */}
      <div className="title">
        <span className="first-word">My</span> Skills
      </div>
      {/* content */}
      <div className="row">
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-paint-brush" />
              </div>
              <div className="name">Design</div>
            </div>
            <ul>
              <li>
                <div className="name">Logo Design</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Web Design</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Illustration</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Photography</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="fa fa-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Website hosting</div>
              </li>
              <li>
                <div className="name">iOS and android apps</div>
              </li>
              <li>
                <div className="name">Create logo design</div>
              </li>
              <li>
                <div className="name">Design for print</div>
              </li>
              <li>
                <div className="name">Modern and mobile-ready</div>
              </li>
              <li>
                <div className="name">Advertising services include</div>
              </li>
              <li>
                <div className="name">Graphics and animations</div>
              </li>
              <li>
                <div className="name">Search engine marketing</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export const SkillsPhotographerForAbout = () => {
  return (
    <div className="row">
      {/* skill item */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div className="skills-list">
          <div className="skill-title border-line-h">
            <div className="icon">
              <i className="fa fa-paint-brush" />
            </div>
            <div className="name">Software Skills</div>
          </div>
          <ul>
            <li className="border-line-h">
              <div className="name">Sketch</div>
              <div className="progress">
                <div className="percentage" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Adobe Photoshop</div>
              <div className="progress">
                <div className="percentage" style={{ width: "65%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Adobe illustration</div>
              <div className="progress">
                <div className="percentage" style={{ width: "75%" }} />
              </div>
            </li>
            <li>
              <div className="name">Figma</div>
              <div className="progress">
                <div className="percentage" style={{ width: "85%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* skill item */}
      <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
        <div className="skills-list dotted">
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
                <div className="percentage" style={{ width: "90%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">German</div>
              <div className="progress">
                <div className="percentage" style={{ width: "60%" }} />
              </div>
            </li>
            <li className="border-line-h">
              <div className="name">Italian</div>
              <div className="progress">
                <div className="percentage" style={{ width: "30%" }} />
              </div>
            </li>
            <li>
              <div className="name">French</div>
              <div className="progress ">
                <div className="percentage" style={{ width: "70%" }} />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="clear" />
    </div>
  );
};

export const SkillsClassic = () => {
  return (
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
                <i className="ion ion-easel" />
              </div>
              <div className="name">Design</div>
            </div>
            <ul>
              <li className="border-line-h">
                <div className="name">Web Design</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Write Music</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "65%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Photoshop</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "75%" }} />
                </div>
              </li>
              <li>
                <div className="name">Graphic Design</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "85%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list dotted">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-flag" />
              </div>
              <div className="name">Languages</div>
            </div>
            <ul>
              <li className="border-line-h">
                <div className="name">English</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "90%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">German</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "60%" }} />
                </div>
              </li>
              <li className="border-line-h">
                <div className="name">Italian</div>
                <div className="progress">
                  <div className="percentage" style={{ width: "30%" }} />
                </div>
              </li>
              <li>
                <div className="name">French</div>
                <div className="progress ">
                  <div className="percentage" style={{ width: "70%" }} />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list circles">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-code" />
              </div>
              <div className="name">Coding</div>
            </div>
            <ul>
              <li>
                <div className="name">WordPress</div>
                <div className="progress p90">
                  <span>90%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">PHP / MYSQL</div>
                <div className="progress p75">
                  <span>75%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">Angular / JavaScript</div>
                <div className="progress p85">
                  <span>85%</span>
                  <Slice />
                </div>
              </li>
              <li>
                <div className="name">HTML / CSS</div>
                <div className="progress p95">
                  <span>95%</span>
                  <Slice />
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* skill item */}
        <div className="col col-d-6 col-t-6 col-m-12 border-line-v">
          <div className="skills-list list">
            <div className="skill-title border-line-h">
              <div className="icon">
                <i className="ion ion-android-list" />
              </div>
              <div className="name">Knowledge</div>
            </div>
            <ul>
              <li>
                <div className="name">Website hosting</div>
              </li>
              <li>
                <div className="name">iOS and android apps</div>
              </li>
              <li>
                <div className="name">Create logo design</div>
              </li>
              <li>
                <div className="name">Design for print</div>
              </li>
              <li>
                <div className="name">Modern and mobile-ready</div>
              </li>
              <li>
                <div className="name">Advertising services include</div>
              </li>
              <li>
                <div className="name">Graphics and animations</div>
              </li>
              <li>
                <div className="name">Search engine marketing</div>
              </li>
            </ul>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
