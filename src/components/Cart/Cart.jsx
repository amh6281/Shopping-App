import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "롱 슬리브 그래픽 티셔츠",
      desc: "롱 슬리브 그래픽 티셔츠",
      isNew: true,
      oldPrice: 24900,
      price: 13900,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "코트",
      desc: "코트",
      isNew: true,
      oldPrice: 24900,
      price: 13900,
    },
  ];

  return (
    <div className="cart">
      <h1>나의 장바구니</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x {item.price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>총 주문금액</span>
        <span>27,800</span>
      </div>
      <button>주문하기</button>
      <span className="reset">장바구니 비우기</span>
    </div>
  );
};

export default Cart;
