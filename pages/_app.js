import "font-awesome/css/font-awesome.min.css";
import Head from "next/head";
import State from "../src/context/state";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  return (
    <State>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />

        <title>Đoàn Đức Tín | Software Engineer | Online CV</title>
        <meta name="description" content="Online Resume of Doan Duc Tin, a Software Engineer (Middle Level),
          Full Stack Developer and Blogger. Owner of satdevelop.com. 
          Contact for works and more information at ductin.dev@gmail.com or via contact form on this website"/>
        <link rel="shortcut icon" href="images/favicon.ico" />

        <meta property="og:title" content="Đoàn Đức Tín | Software Engineer | Online CV" />
        <meta property="og:description" content="Online Resume of Doan Duc Tin, a Software Engineer (Middle Level),
          Full Stack Developer and Blogger. Owner of satdevelop.com. 
          Contact for works and more information at ductin.dev@gmail.com or via contact form on this website"/>
        <meta property="og:url" content="https://ductin.satdevelop.com" />
        <meta property="og:image" content="images/og_bg.jpg" />

        <meta name="keywords" content="Software Engineer, Hire, Developer, Full Stack, IT, Talent acquisition, Freelance, Da Nang, CV, Resume, Profile, Doan Duc Tin" />
        <meta name="robots" content="index, follow" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="satdevelop.com" />
      </Head>
      <PreLoader />
      <Component {...pageProps} />
    </State>
  );
}

export default MyApp;
