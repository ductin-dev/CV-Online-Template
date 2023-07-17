import SwiperCore, {
  Autoplay,
  EffectFade,
  Grid,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Pagination, Navigation, EffectFade, Autoplay, Grid]);
const Testimonials = () => {
  const props = {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  };
  return (
    <div className="content testimonials">
      {/* title */}
      <div className="title">Testimonials</div>
      {/* content */}
      <div className="row testimonials-items">
        {/* client item */}
        <div className="col col-d-12 col-t-12 col-m-12 border-line-v">
          <div className="revs-carousel default-revs">
            <Swiper {...props} className="owl-carousel">
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Through many semester, I see that you is an extermely responsible in your works
                    wish all the best thing for you after graduate, and I would highly recommend you to any employer.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/testi1.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">TrangNH</div>
                      <div className="company">Mentor / Lecturer in Business Class</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    I think your exceptional skills and work ethic were critical to our company's success.
                    Also your contributions to our team were very valuable, I hope you can keep doing more better in your career road.
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/testi2.jpg" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">TraHMT</div>
                      <div className="company">CTO at Palm Design</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="item">
                <div className="revs-item">
                  <div className="text">
                    Thank you for your hard work and your great contibution on our unit, hope you can find a job you love, the enviroment that brings you success and a suitable work with your great skills, good luck
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="images/testi3.png" alt="" />
                    </div>
                    <div className="info">
                      <div className="name">DiepATP</div>
                      <div className="company">Business Unit Director / Academy</div>
                    </div>
                    <div className="clear" />
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination"></div>
            </Swiper>
          </div>
        </div>
        <div className="clear" />
      </div>
    </div>
  );
};
export default Testimonials;
