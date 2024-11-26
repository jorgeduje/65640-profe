import { useEffect } from "react";
import { useState } from "react";
import { products } from "../../../products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { PuffLoader } from "react-spinners";

const ItemListContainer = () => {
  const [myProducts, setMyProducts] = useState([]);

  const { name } = useParams();

  useEffect(() => {
    let productosFiltrados = products.filter((el) => el.category === name);

    let task = new Promise((res) => {
      setTimeout(() => {
        res(name ? productosFiltrados : products);
      }, 2000);
    });
    task
      .then((resp) => {
        setMyProducts(resp);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        console.log("Finally");
      });
  }, [name]);

  // if (myProducts.length === 0) {
  //   return <h1>Cargando....</h1>;
  // }

  return (
    <div>
      <h2>Aca los productos</h2>
      {myProducts.length === 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PuffLoader color="steelblue" />
        </div>
      ) : (
        <ItemList myProducts={myProducts} />
      )}
      <h4>Aca el final de la pagina</h4>
    </div>
  );
};

export default ItemListContainer;
