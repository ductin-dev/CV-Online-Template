import { useEffect, useState } from 'react';

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
  const numberOfSnowflakes = 39;
  var requestAnimationFrame = typeof window !== "undefined" ? window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame : null;

  const [snowFlakes, setSnowFlakes] = useState([]);
  const [resetPosition, setResetPosition] = useState(true);

  function getSupportedPropertyName(b) {
    for (var a = 0; a < b.length; a++) {
      if (typeof document.body.style[b[a]] != "undefined") { return b[a] }
    }
    return null
  }

  function setTranslate3DTransform(a, c, b) {
    var transformProperty = getSupportedPropertyName(["transform", "msTransform", "webkitTransform", "mozTransform", "oTransform"]);
    var d = "translate3d(" + c + "px, " + b + "px, 0)";
    a.style[transformProperty] = d;
  }

  function getPosition(b, a) {
    return Math.round(-1 * b + Math.random() * (a + 2 * b))
  }

  function moveSnowflakes() {
    for (var b = 0; b < snowFlakes.length; b++) {
      var a = snowFlakes[b];
      a.update();
    }

    requestAnimationFrame(moveSnowflakes)
  }


  function generateSnowflakes() {
    var b = document.querySelector(".snowflake");
    var h = b.parentNode;

    let snowFlakesTmp = [];
    for (var d = 0; d < numberOfSnowflakes; d++) {
      var j = b.cloneNode(true);
      h.appendChild(j);
      var e = getPosition(50, document.documentElement.clientWidth);
      var a = getPosition(50, document.documentElement.clientHeight);
      var c = 5 + Math.random() * 40;
      var g = 4 + Math.random() * 10;
      var f = new snowFlake(j, g, c, e, a);
      snowFlakesTmp.push(f);
    }
    setSnowFlakes(snowFlakesTmp);

    h.removeChild(b);
  }

  function snowFlake(b, a, d, e, c) {
    this.element = b; this.radius = a; this.speed = d; this.xPos = e; this.yPos = c; this.counter = 0;
    this.sign = Math.random() < 0.5 ? 1 : -1;
    this.element.style.opacity = 0.5 + Math.random();
    this.element.style.fontSize = 4 + Math.random() * 30 + "px"
  }

  snowFlake.prototype.update = function () {
    this.counter += this.speed / 5000;
    this.xPos += this.sign * this.speed * Math.cos(this.counter) / 40;
    this.yPos += Math.sin(this.counter) / 40 + this.speed / 30;
    setTranslate3DTransform(this.element, Math.round(this.xPos), Math.round(this.yPos));
    if (this.yPos > document.documentElement.clientHeight) { this.yPos = -50 }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      requestAnimationFrame = window.requestAnimationFrame
      window.addEventListener("resize", () => setResetPosition(true))
      generateSnowflakes();
    }

    return () => {
      window.addEventListener("resize", () => setResetPosition(true))
    };
  }, []);

  useEffect(() => {
    if (snowFlakes.length > 0) {
      moveSnowflakes();
    }
  }, [snowFlakes])

  useEffect(() => {
    if (resetPosition) {
      for (var b = 0; b < snowFlakes.length; b++) {
        var a = snowFlakes[b];
        a.xPos = getPosition(50, document.documentElement.clientWidth);
        a.yPos = getPosition(50, document.documentElement.clientHeight)
      }
      setResetPosition(false);
    }
  }, [resetPosition])

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
          <div className="title">Mai Thi My Giang</div>

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