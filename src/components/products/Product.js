import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./product.css";
import SingleProducts from "./SingleProducts";
import { NavLink } from "react-router-dom";
function Product() {
  const { Products } = useSelector((state) => state.Products);
  const [input, setInput] = useState("");
  let timerID = useRef(null);

  //   meta.fund_house

  const searchFilter = (data) => {
    if (input !== "") {
      data = data.filter((ele) => {
        if (
          ele.meta.fund_house
            .toString()
            .toLowerCase()
            .includes(input.toString().toLowerCase())
        ) {
          return true;
        }
      });
    }
    return data;
  };

  let filteredProducts = searchFilter(Products);

  const debounce = (args) => {
    clearTimeout(timerID.current);
    timerID.current = setTimeout(() => {
      setInput(() => args);
    }, 500);
  };

  return (
    <div>
      <div className="search-bar">
        <input type="text" onChange={(e) => debounce(e.target.value)} />
      </div>
      <div className="product-listing">
        {filteredProducts.length === 0 && <h1>No Products found</h1>}
        {filteredProducts.map((ele) => (
          <SingleProducts ele={ele} />
        ))}
      </div>
    </div>
  );
}

export default Product;
