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
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import { ResumeSectionFitness } from "../src/components/sections/Resume";
// import RecentWorksFitness from "../src/components/sections/recentWorks/RecentWorksFitness";
import Services from "../src/components/sections/Services";
import { SkillsFitness } from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import image from "../public/images/avatar-profile.jpg";

const RecentWorksFitness = dynamic(
  () => import("../src/components/sections/recentWorks/RecentWorksFitness"),
  {
    ssr: false,
  }
);

const bio = `<p>
<strong>Hello I'm Tran Phi Anh.</strong>
Front-End Developer from DaNang.
&amp My big goal is to improve my coding and
teamwork skills, leverage and understand
myself to become a professional developer. A
fast learner and hard worker looking forward
to having the opportunity to work for your
company.
</p>`;

const serviceList = [
  {
    icon: "fa fa-building-o",
    title: "Corize INC Developer",
    desc: "Participated in the development of Web projects and built front-end functions of Web applications. Maintain, optimize code and enhance ongoing products",
  },
  {
    icon: "fa fa-code",
    title: "Front-End Developer",
    desc: "Having above 1-year experience in developing Front-End application using ReactJs, Angular. Normal task is design, developent new story, fix bugs, reformatting code for make simple, clear, not duplication",
  },
  {
    icon: "fa fa-code",
    title: "Back-End",
    desc: "Knowledge of Rest API architecture style, design patterns, security...",
  },
  {
    icon: "fa fa-commenting",
    title: "Team Work, Communication",
    desc: "Can read and understand English well, basic English communication. More than 1 year of team work experience.",
  },
];

const headerMenus = [
  { title: "About", link: "about", icon: "icon ion-person" },
  { title: "Resume", link: "resume", icon: "icon ion-android-list" },
  { title: "Gallery", link: "works", icon: "icon ion-images" },
  // { title: "Blog", link: "blog", icon: "icon ion-chatbox-working" },
  { title: "Contact", link: "contacts", icon: "icon ion-at" },
];

const animationText = ["Active person", "Front-End Developer", "Back-End Developer"];

const Index5 = () => {
  return (
    <Layout
      bg={"img"}
      bgImgUrl="images/bg3.jpg"
      animationIn={"rollIn"}
      animationOut={"rollOut"}
    >
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/demos/demo-5-colors.css" />
      </Head>
      <Header noSideBarBtn menus={headerMenus} animationText={animationText} />
      <Home>
        <div className="profile no-photo">
          {/* profile image */}
          <div
            className="slide"
            style={{ backgroundImage: "url(https://res.cloudinary.com/deqzndnjs/image/upload/v1663639647/samples/avatar-profile_g7wbpa.jpg)" }}
          />
          {/* profile titles */}
          <div className="title">Tran Phi Anh</div>
          <TypingAnimation data={animationText} />

          {/* profile socials */}
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tran_phi_anh_2008/">
              <span className="fa fa-instagram" title="Instagram" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Anhtpde140084/">
              <span className="fa fa-facebook-f" title="Facebook" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://soundcloud.com/tr-n-phi-anh-900810560">
              <span className="fa fa-linkedin" title="Sound Cloud" />
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="https://www.linkedin.com/in/fininan-tran-86260325b" target="_blank" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="ion ion-paper-airplane" />
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About >
          <AboutMe bio={bio} />
          {/* <Clients /> */}
          {/* <Services serviceList={serviceList} /> */}
          {/* <Pricing /> */}
          <FunFact />
          <Quote />
        </About>
        <Resume >
          <ResumeSectionFitness />
          <SkillsFitness />
          {/* <Testimonials /> */}
        </Resume>
        <Work >
          <RecentWorksFitness />
        </Work>
        {/* <Blog >
          <BlogSection />
        </Blog> */}
        <Contact >
          <ContactInfo />
          {/* <ContactForm /> */}
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default Index5;
