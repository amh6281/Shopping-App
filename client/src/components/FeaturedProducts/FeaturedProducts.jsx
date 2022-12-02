import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import axios from "axios";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          process.env.REACT_APP_API_URL +
            `/products?populate=*&[filters][type][$eq]=${type}`,
          {
            headers: {
              Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
            },
          }
        );
        setProducts(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(products);
  return (
    <div className="featuredProducts">
      <div className="top">
        {type === "recommend" ? <h1>추천 상품</h1> : <h1>트렌드 상품</h1>}
      </div>
      <div className="bottom">
        {products.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
