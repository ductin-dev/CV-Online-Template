import { Fragment } from "react";
const Clients = () => {

  const skills = [
    { href: "", image: "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png", name: "Javascript" },
    { href: "", image: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png", name: "Typescript" },
    { href: "", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", name: "ReactJs, React native" },
    { href: "", image: "https://i18nexus.com/_next/static/media/nextjs.e54be70c.svg", name: "Nextjs" },
    { href: "", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", name: "Angular" },
    { href: "", image: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png", name: "Docker" },
    { href: "", image: "https://devopsdatacenter.files.wordpress.com/2024/04/amazon_ec2.png", name: "AWS EC2" },
  ]
  return (
    <Fragment>
      <div className="content clients">
        {/* title */}
        <div className="title">Skills</div>
        {/* content */}
        <div className="row client-items">
          {/* client item */}
          {skills.map((item) => (
            <div className="col col-d-3 col-t-3 col-m-6 border-line-v">
              <div className="">
                <div className="image">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={item.href}
                  >
                    <img src={item.image} width={35} height={35} alt="" />
                  </a>
                </div>
                <div>
                  <p className="" style={{ fontSize: '11px' }}>{item.name}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="clear" />
        </div>
        <div className="moreskills">
          <h6>There are also some related skills: </h6>
          <li>Git, Redux, Firebase, Mysql, MSSQL, Mongo, HTML5, CSS, Styled component...</li>
          <li>CircleCI, EC2, VPS, Physical Server, CICD... </li>
        </div>
      </div>
    </Fragment>
  );
};
export default Clients;
