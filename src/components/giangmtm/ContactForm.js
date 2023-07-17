import { useState } from "react";

const ContactForm = () => {

  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const sendMailHandler = () => {
    window.open(`mailto:ductin.dev@gmail.com?subject=${subject}&body=${message}`);
  }

  return (
    <div className="content contacts">
      {/* title */}
      <div className="title">Contact Form</div>

      {/* content */}
      <div className="row">
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="contact_form">
            <form id="cform" method="post">
              <div className="row">
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input
                      type="text" name="name"
                      placeholder="Subject | Full Name"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)} />
                  </div>
                </div>
                <div className="col col-d-6 col-t-6 col-m-12">
                  <div className="group-val">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="col col-d-12 col-t-12 col-m-12">
                  <div className="group-val">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="align-left">
                <a onClick={sendMailHandler} className="button">
                  <span className="text">Send Message</span>
                  <span className="arrow" />
                </a>
              </div>
            </form>
            {/* <div className="alert-success">
              <p>Thanks, your message is sent successfully.</p>
            </div> */}
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default ContactForm;
