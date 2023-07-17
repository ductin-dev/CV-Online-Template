import { Fragment } from "react";
const Achievement = () => {
  return (
    <Fragment>
      <div className="content fuct">
        {/* title */}
        <div className="title">Achievement</div>
        {/* content */}
        <div className="row fuct-items">
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-trophy" />
              </div>
              <div className="name">5 Certificate achived</div>
            </div>
          </div>
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-graduation-cap" />
              </div>
              <div className="name">Good Degree in Business Administration</div>
            </div>
          </div>
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-flag" />
              </div>
              <div className="name">+10 Clients contributed with</div>
            </div>
          </div>
          {/* fuct item */}
          <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
            <div className="fuct-item">
              <div className="icon">
                <span className="fa fa-certificate" />
              </div>
              <div className="name">8.0 GPA, +2 contests joined</div>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </Fragment>
  );
};
export default Achievement;
