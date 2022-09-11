import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact, { FunFactAboutCong } from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection, { ResumeAboutCong } from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills, { SkillsAboutCong, SkillsClassic, SkillsFitness, SkillsLawyer } from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
<strong>I am Nguyen Duc Cong,</strong> I am a student who has just completed my studies and wants to become an AI developer. 
Have had some ability in the process of doing personal projects and some projects with members in university as well as 5 months of internship. 
At work, I am a very responsible person, will be willing to learn as well as help the members to get the best results.
</p>`;
const Index = () => {
  return (
    <Layout bg={"gradient"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/rtl-new.css" />
        <link rel="stylesheet" href="css/demos/demo-1-colors.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(images/cong_image/cong_image_1.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Nguyen Duc Cong</div>
          <div class="subtitle">Software Engineering</div>
          <div className="subtitle subtitle-typed">
            <TypingAnimation />
          </div>
          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/congdaica2k">
              <span className="fa fa-facebook-f" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://github.com/Nguyen-Duc-Cong">
              <span className="fa fa-github" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/congnd2k">
              <span className="fa fa-linkedin" />
            </a>
          </div>
          {/* profile buttons */}
          {/* <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
            </a>
          </div> */}
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          {/* <Services /> */}
          {/* <Pricing /> */}
          <FunFactAboutCong />
          {/* <Clients /> */}
          {/* <Quote /> */}
        </About>
        <Resume>
          <ResumeAboutCong />
          <SkillsAboutCong/>

        </Resume>
        <Work>
          <RecentWorks user={"cong"}/>
        </Work>
        {/* <Blog>
          <BlogSection />
        </Blog> */}
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index;
