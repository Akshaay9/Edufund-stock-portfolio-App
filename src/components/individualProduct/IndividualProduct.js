import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import SingleProducts from "../products/SingleProducts";
import "./individualProduct.css";

function IndividualProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const { Products } = useSelector((state) => state.Products);

  useEffect(() => {
    setProduct((ele) => Products.find((e) => e.id === Number(id)));
  }, []);

  return (
    <div>
      {Object.keys(product).length > 0 && (
        <>
          <div className="product-listing">
            <SingleProducts ele={product} />
          </div>
          <div className="chart">
            <LineChart ele={product} />
            <BarChart ele={product} />
          </div>
        </>
      )}
    </div>
  );
}

export default IndividualProduct;
