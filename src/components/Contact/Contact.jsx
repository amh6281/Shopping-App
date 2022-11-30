import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>이번 달 혜택과 이벤트 소식 및 할인 쿠폰을 보내드려요.</span>
        <div className="mail">
          <input type="text" placeholder="E-mail을 입력해주세요." />
          <button>받기</button>
        </div>
        <div className="icons">
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
          <GoogleIcon />
        </div>
      </div>
    </div>
  );
};

export default Contact;
