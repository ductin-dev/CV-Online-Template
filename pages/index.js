import About from "../src/components/About";
import Achieve from "../src/components/Achieve";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import Product from "../src/components/Product";

import Quote from "../src/components/sections/Quote";

import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

import AboutMe from "../src/components/tindd/AboutMe";
import Services from "../src/components/tindd/Services";
import Testimonials from "../src/components/tindd/Testimonials";
import Achievement from "../src/components/tindd/Achievement";
import ResumeSection from "../src/components/tindd/Resume";
import RecentWorksWritter from "../src/components/tindd/RecentWorksWritter";
import ContactForm from "../src/components/tindd/ContactForm";
import ContactInfo from "../src/components/tindd/ContactInfo";
import Skills from "../src/components/tindd/Skills";

import styles from "./styles.module.css";

const animationText = [
  "Software Engineer",
  "Full Stack Developer",
  "Blogger. Owner of satdevelop.com"
];

const Index3 = () => {

  return (
    <Layout bg={"blured"}>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/tin-avatar.jpg)" }}
          />
          {/* profile titles */}
          <div className="title" style={{ fontFamily: "PFBeauSansPro-Black" }}>Đoàn Đức Tín</div>

          <TypingAnimation data={animationText} />
          {/* profile socials */}
          <div className={`${styles.social_link_container}`}>
            <a className={`${styles.social_link_item} ${styles.social_link_fb}`} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/đoàn-đức-tín-2a296718a/">
              <span className="fa fa-linkedin" />
            </a>
            <a className={`${styles.social_link_item} ${styles.social_link_fb}`} target="_blank" rel="noreferrer" href="https://github.com/ductin-dev">
              <span className="fa fa-github" />
            </a>
            <a className={`${styles.social_link_item} ${styles.social_link_fb}`} target="_blank" rel="noreferrer" href="https://gitlab.com/ductin.dev">
              <span className="fa fa-gitlab" />
            </a>
            <a className={`${styles.social_link_item} ${styles.social_link_fb}`} target="_blank" rel="noreferrer" href="https://www.facebook.com/satfomacej">
              <span className="fa fa-facebook" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="https://www.satdevelop.com" className="lnk" target="_blank">
              <span className="text">Visit Blog</span>
              <span className="ion ion-arrow-right-c" />
            </a>
            <a href="CV_TINDD_DEVFT2022_Preview.pdf" className="lnk" target="_blank">
              <span className="text">Download CV</span>
              <span className="ion ion-android-download" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe callIconStyle={styles.call_icon} />
          <Services />
          <Testimonials />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
        </Resume>
        <Product>
          <ResumeSection />
          <Skills />
        </Product>
        <Achieve>
          <Achievement />
          {/* <Quote /> */}
        </Achieve>
        <Work>
          <RecentWorksWritter />
        </Work>
        <Contact>
          <ContactInfo styles={styles} />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index3;
