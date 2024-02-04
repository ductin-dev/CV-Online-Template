import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";

import "../styles/globals.css";
import "../public/css/giang-cv/rain-flower.css"

function MyApp({ Component, pageProps }) {
  return (
    <State>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <title>Mai Thị Mỹ Giang | Portfolio | Profile | CV</title>
        <meta name="description" content="Online Portfolio of Mai Thi My Giang, a Content Writer Specialist,
          Talent Acquisition and Recruiter. Contact for works: maimygiang.0101@gmail.com or via contact information on this website"/>

        <meta property="og:title" content="Mai Thị Mỹ Giang | Portfolio | Profile | Online CV" />
        <meta property="og:description" content="Online Portfolio of Mai Thi My Giang, a Content Writer Specialist,
          Talent Acquisition and Recruiter. Contact for works at maimygiang.0101@gmail.com or via contact informations on this website"/>
        <meta property="og:url" content="https://giangmtm.satdevelop.com" />
        <meta property="og:image" content="images/og_bg.jpg" />

        <meta name="keywords" content="Recruit, Talent acquisition, Content Writer, HR, Freelance, Da Nang, CV, Resume, Profile, Mai Thi My Giang" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="satdevelop.com" />
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}

export default MyApp;