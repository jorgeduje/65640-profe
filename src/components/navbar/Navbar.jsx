import CartWidget from "../cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        backgroundColor: "steelblue",
      }}
    >
      <h2>logo</h2>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
        }}
      >
        <li>Todos</li>
        <li>Teclados</li>
        <li>Mouses</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
