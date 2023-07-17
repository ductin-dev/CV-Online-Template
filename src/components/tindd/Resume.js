import { Fragment } from "react";
const ResumeSection = () => {
  return (
    <Fragment>
      <div className="content resume">
        {/* title */}
        <div className="title">Resume</div>
        {/* content */}
        <div className="row">
          {/* experience */}
          <div className="col col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-briefcase" />
              </div>
              <div className="name">Experience</div>
            </div>
            <div className="resume-items">
              <div className="resume-item border-line-h active">
                <div className="date">2022 - <strong>Present</strong></div>
                <div className="name">Recruiter | Administration</div>
                <div className="company">Academy | FPT Software</div>
                <p>
                  ● Responsibly to recruiting developers and talent that meet business
                  unit's requirements. Responsibly to research company's needs, hiring requirements and
                  analyzing applicant's skill
                </p>
                <p>
                  ● Conducted applicant pre-screening and planned an interview
                  strategy. Perform a CV screening section with candidates.
                </p>
                <p>
                  ● Synthesize and perform interview questions, skill tests.
                  Recruit students for FPT Software Academy program.
                  Using Callio, LinkedIn,.. as contact systems for recruitment and keep
                  connection with applicants.
                </p>
                <p>
                  ● Perform administrative and logistical work for events and seminars
                  in the company.
                </p>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">Mar-2022 - Nov-2022</div>
                <div className="name">Marketing Specialist</div>
                <div className="company">Marketing Department | FPT Software</div>
                <p>
                  ● Create and manage content on the company website, fanpage, video
                  script, etc.
                </p>
                <p>
                  ● Organize internship events, job fairs, and seminars for business
                  partners of FPT.
                </p>
                <p>
                  ● Find a logistics provider to complete the event's invoice
                </p>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">2021 - 2022</div>
                <div className="name">Content Writer | Administration</div>
                <div className="company">CHICC Agency</div>
                <p>● Plan, Analysis, Optimize company SEO and engagement in social medias.</p>
                <p>● Work with customers to find their needs and suggest advertisement plans</p>
                <p>● Create ideas, plan & implement company marketing strategy</p>
              </div>
            </div>
          </div>
          <div className="clear" />
          {/* education */}
          <div className="col col-m-12 border-line-v">
            <div className="resume-title border-line-h">
              <div className="icon">
                <i className="fa fa-university" />
              </div>
              <div className="name">Education & PET Projects</div>
            </div>
            <div className="resume-items active">
              <div className="resume-item border-line-h active">
                <div className="date">2021</div>
                <div className="name">Sale & Financial Executive | Report Management </div>
                <div className="company">Seven Foxx | FPT Capstone Project</div>
                <p>
                  ● Consulting and customer care during
                  their shopping process
                </p>
                <p>
                  ● Create campaign, selling accessories on social media and analyze customers
                </p>
                <p>
                  ● Manage financial budget & analyze financial statement.
                </p>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">2022 - Mar-2023</div>
                <div className="name">Business Class</div>
                <div className="company">Coursera</div>
                <p>
                  ● Coursework - Business Administration.
                </p>
                <p>
                  ● Certificate of Digital advertising, Content marketing
                </p>
              </div>
              <div className="resume-item border-line-h active">
                <div className="date">2018 - 2022</div>
                <div className="name">FPT University</div>
                <div className="company">Da Nang</div>
                <p>
                  ● {`Bachelor's`} Degree in Business Administration with Good evaluation.
                </p>
                <p>
                  ● Join many clubs to complete Agency Projects, joinning in 2 contests.
                </p>
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default ResumeSection;
