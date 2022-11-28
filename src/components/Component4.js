import React from "react";
import "./Component4.scss";
import githubImg from "../assets/github.svg";


const github_link =
  "https://github.com/pr0f-moriarty/fishy";


const Component4 = () => {
  return (
    <div className="component4" align="center">
      <p className="developerInfo"> Developed by K </p>
      <div className="socials">
        <a href={github_link}>
          <img
            width="30px"
            src={githubImg}
            style={{ padding: "10px", fill: "white" }}
            alt="github logo"
          />{" "}
        </a>
        
      </div>
    </div>
  );
};

export default Component4;
