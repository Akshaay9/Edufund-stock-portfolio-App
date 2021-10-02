import React from "react";
import { NavLink } from "react-router-dom";

function Products({ ele }) {
  return (
    <NavLink to={`/product/${ele.id}`}>
      <div className="product-list">
        <div className="product-list-left">
          <div className="img">
            <img src={ele.img} alt="" />
          </div>
          <div className="product-data">
            <h3>{ele.meta.fund_house}</h3>
            <p>
              {" "}
              <span>scheme type : </span> {ele.meta.scheme_type}
            </p>
            <p>
              <span>scheme category : </span>
              {ele.meta.scheme_category}
            </p>
          </div>
        </div>
        <div className="product-list-right">
          <div className="product-meta-data">
            <div className="product-meta-data-one">
              <span>Scheme category</span>
              <p>{ele.meta.scheme_category}</p>
            </div>
            <div className="product-meta-data-one">
              <span>Scheme code</span>
              <p>{ele.meta.scheme_code}</p>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default Products;
