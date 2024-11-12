import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/navbar/Navbar";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";
import Cart from "./components/pages/cart/Cart";
import ItemDetail from "./components/pages/itemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* RUTAS  */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
