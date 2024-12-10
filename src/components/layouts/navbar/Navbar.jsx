import { Link } from "react-router-dom";
import CartWidget from "../../common/cartWidget/CartWidget";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px",
        backgroundColor: "peru",
      }}
    >
      <Link to="/">logo</Link>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          gap: "20px",
        }}
      >
        <Link to="/category/teclados">Teclados</Link>
        <Link to="/category/mouse">Mouses</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
