import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import "./individualProduct.css";

function IndividualProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const { Products } = useSelector((state) => state.Products);

  useEffect(() => {
    setProduct((ele) => Products.find((e) => e.id === Number(id)));
  }, []);

  return <div>{JSON.stringify(product,null, 2)}</div>;
}

export default IndividualProduct;
