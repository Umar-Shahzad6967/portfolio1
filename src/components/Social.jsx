import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muhammad-umar-shahzad-8819002b7/" },
  { Social: <FaGithub />, link: "https://github.com/Umar-Shahzad6967" },
];

const Social = () => {
  return (
    <div className="nav social-icons justify-content-center text-sm-center justify-content-md-end">
      {SocialShare.map((val, i) => (
        <a key={i} href={`${val.link}`} rel="noreferrer" target="_blank">
          {val.Social}
        </a>
      ))}
    </div>
  );
};

export default Social;
