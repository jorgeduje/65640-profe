import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../products";

products;

const ItemDetail = () => {
  const { id } = useParams(); // siempre llega un objeto y los valores siempre son string

  const [product, setProduct] = useState({});

  useEffect(() => {
    let productSelected = products.find((el) => el.id === +id);
    setProduct(productSelected);
  }, [id]);

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt="" />
    </div>
  );
};

export default ItemDetail;
