import { Fragment } from "react";
const Quote = () => {
  return (
    <Fragment>
      <div className="content quote">
        {/* title */}
        <div className="title">
          <span>Quote</span>
        </div>
        {/* content */}
        <div className="row">
          <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
            <div className="revs-item">
              <div className="text">
                <div>
                  If you don't take risks with the unusual, you will forever be stuck with the ordinary.
                </div>
              </div>
              <div className="user">
                <div className="img">
                  <img src="https://nhahangcarnaval.com/wp-content/uploads/2022/01/hinh-anh-avatar-de-thuong-cute.jpg" alt="Tran Phi Anh" />
                </div>
                <div className="info">
                  <div className="name">Phi Anh</div>
                  <div className="company">Developer</div>
                </div>
                <div className="clear" />
              </div>
            </div>
          </div>
          <div className="clear" />
        </div>
      </div>
    </Fragment>
  );
};
export default Quote;
