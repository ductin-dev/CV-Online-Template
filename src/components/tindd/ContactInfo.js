const ContactInfo = ({ styles }) => {

  const callHandler = () => {
    window.open('tel:0354163705');
  }

  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Get in Touch</div>
      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15340.396092301724!2d108.24420290172486!3d16.00835990747905!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1681749153614!5m2!1svi!2s"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
          <div className="col-12 col-m-12 border-line-v">
            <div className="info-list">
              <ul>
                <li style={{ width: "100%" }}><strong>Email for work . . . .</strong> <b>mygiang.tramy@gmail.com</b></li>
                <li><strong>FullTime . . . .</strong> 8.AM to 17.PM</li>
                <li><strong>Freelance . . . .</strong> Max 4 hours</li>
                <li><strong>Phone . . . .</strong> +84 *** **** 05  <span onClick={() => callHandler()} className={`fa fa-phone ${styles.call_icon}`} /></li>
                <li><strong>Social . . . .</strong>
                  <span onClick={() => window.open("https://www.linkedin.com/in/mỹ-giang-b50411227/", "_blank")} className={`fa fa-linkedin ${styles.call_icon}`} style={{ marginRight: 10 }} />
                  <span onClick={() => window.open("https://www.facebook.com/mai.giang.12177", "_blank")} className={`fa fa-facebook ${styles.call_icon}`} />
                </li>
                <li style={{ width: "100%" }}><strong>Address . . . .</strong> Ngu Hanh Son, Da Nang city, Viet Nam</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactInfo;
