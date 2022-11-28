import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>CATEGORY</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessory</span>
          <span>Children</span>
        </div>
        <div className="item">
          <h1>COMMUNITY</h1>
          <span>FAQ</span>
          <span>Page</span>
          <span>Store</span>
        </div>
        <div className="item">
          <h1>ABOUT</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            asperiores explicabo perferendis assumenda reprehenderit? Magni
            temporibus, dolore libero perspiciatis laudantium ipsum, nemo
            adipisci voluptatum aut tempora, quod eius velit nam.
          </span>
        </div>
        <div className="item">
          <h1>CONTACT</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
            asperiores explicabo perferendis assumenda reprehenderit? Magni
            temporibus, dolore libero perspiciatis laudantium ipsum, nemo
            adipisci voluptatum aut tempora, quod eius velit nam.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">ReactStore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
