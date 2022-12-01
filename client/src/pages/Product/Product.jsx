import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrg&w=1600&lazy=load",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrg&w=1600&lazy=load",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">24,900</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          molestias nam animi necessitatibus ipsa harum vel qui optio officia
          omnis neque tenetur, commodi impedit dignissimos. Totam at iure
          consequatur eligendi?
        </p>
        <div className="quantity">
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />
          장바구니
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> 위시리스트 추가
          </div>
        </div>
        <div className="info">
          <span>제조사: REACTSTORE</span>
          <span>제품 타입: T-Shirt</span>
          <span>태그: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>설명</span>
          <hr />
          <span>추가 정보</span>
          <hr />
          <span>자주하는 질문</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
