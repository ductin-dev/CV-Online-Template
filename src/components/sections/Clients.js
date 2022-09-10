import { Fragment } from "react";
const Clients = () => {

  const skills = [
    { href: "", image: "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png", name: "Javascript" },
    { href: "", image: "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png", name: "Typescript" },
    { href: "", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png", name: "ReactJs, React native" },
    { href: "", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png", name: "Angular" },
    { href: "", image: "https://miro.medium.com/max/856/1*O68LbDvD5Dcsnez73M7v4Q.png", name: "Spring Boot" },
    { href: "", image: "https://stackjava.com/wp-content/uploads/2018/07/mongodb.png", name: "MongoDb" },
    { href: "", image: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png", name: "Docker" },
    { href: "", image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg", name: "Socket.io" },
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
          <p>Git, Redux, Firebase, Mysql, Sqlsv, HTML5, CSS, SASS..v.v.</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Clients;
