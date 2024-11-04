const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        width: "300px",
        padding: "10px",
        border: "1px solid black",
        margin: "10px",
      }}
    >
      <h3>{product.title}</h3>
      <img
        src={product.img}
        alt={product.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button>Ver detalle</button>
    </div>
  );
};

export default ProductCard;
