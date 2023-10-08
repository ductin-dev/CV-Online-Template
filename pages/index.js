import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";

import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";

import AboutMe from "../src/components/giangmtm/AboutMe";
import Services from "../src/components/giangmtm/Services";
import Testimonials from "../src/components/giangmtm/Testimonials";
import Achievement from "../src/components/giangmtm/Achievement";
import ResumeSection from "../src/components/giangmtm/Resume";
import RecentWorksWritter from "../src/components/giangmtm/RecentWorksWritter";
import ContactForm from "../src/components/giangmtm/ContactForm";
import ContactInfo from "../src/components/giangmtm/ContactInfo";
import Skills from "../src/components/giangmtm/Skills";
import ProductList from "../src/components/giangmtm/ProductList";
import Product from "../src/components/Product";

import styles from "./styles.module.css";

const animationText = [
  "Content Writer Specialist",
  "Talent Acquisition | Recruiter",
];

const Index = () => {

  return (
    <Layout bg={"blured"}>
      <Header noSideBarBtn animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/giang-avatar1new.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Mai Thi My. Giang</div>

          <TypingAnimation data={animationText} />
          {/* profile socials */}
          <div className={`${styles.social_link_container}`}>
            <a className={`${styles.social_link_item} ${styles.social_link_fb}`} target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/mỹ-giang-b50411227/">
              <span className="fa fa-linkedin" />
            </a>
            <a className={`${styles.social_link_item} ${styles.social_link_fb}`} target="_blank" rel="noreferrer" href="https://www.facebook.com/mai.giang.12177">
              <span className="fa fa-facebook" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="https://drive.google.com/drive/folders/10wJMSWm9yhYT81a9_1kNBXW6r47Ti3TF" className="lnk" target="_blank">
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
          <Achievement />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          {/* <Quote /> */}
        </Resume>
        <Work>
          <RecentWorksWritter />
        </Work>
        <Product>
          <ProductList />
        </Product>
        <Contact>
          <ContactInfo styles={styles} />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index;
