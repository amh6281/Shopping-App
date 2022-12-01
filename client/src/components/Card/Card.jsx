import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";
const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
          {item.isNew && <span>신규 상품</span>}
          <img src={item.img} alt="" className="mainImg" />
          <img src={item.img2} alt="" className="secondImg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>{new Intl.NumberFormat().format(item.oldPrice)}원</h3>
          <h3>{new Intl.NumberFormat().format(item.price)}원</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
