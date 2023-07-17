import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../About";
import Blog from "../Blog";
import Contact from "../Contact";
import Home from "../Home";
import Resume from "../Resume";
import AboutMe from "../sections/AboutMe";
import BlogSection from "../sections/Blog";
import Clients from "../sections/Clients";
import ContactForm from "../sections/ContactForm";
import ContactInfo from "../sections/ContactInfo";
import FunFact from "../sections/FunFact";
import Pricing from "../sections/Pricing";
import Quote from "../sections/Quote";
import ResumeSection from "../sections/Resume";
import Services from "../sections/Services";
import Skills from "../sections/Skills";
import Testimonials from "../sections/Testimonials";
import TypingAnimation from "../TypingAnimation";
import Work from "../Work";
import ContentContainer from "../../layout/ContentContainer";
import Header from "../../layout/Header";
import Layout from "../../layout/Layout";
const RecentWorks = dynamic(
  () => import("../sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
Satdevelop is a blog of Doan Duc Tin (Đoàn Đức Tín) I have rich experience in
web site design and building and customization, also I am good at wordpress.
I love to talk with you about our unique.
</p>`;
const IndexDarkRtl = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/rtl-new.css" />
        <link rel="stylesheet" href="css/new-skin/classic-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/bg.jpg)" }}
          />
          <div className="image">
            <img src="images/profile.png" alt="" />
          </div>
          <div className="title">Ryan Adlard</div>
          <TypingAnimation />
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <span className="fa fa-dribbble" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.spotify.com/">
              <span className="fa fa-spotify" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://stackoverflow.com/"
            >
              <span className="fa fa-stack-overflow" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          <Pricing />
          <FunFact />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDarkRtl;
