import FetchingComments from "./components/fetchingComments/FetchingComments";
import FetchingData from "./components/fetchingData/FetchingData";
import FetchingPost from "./components/fetchingPost/FetchingPost";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div>
      {/* <Navbar />
      <ItemListContainer /> */}
      {/* <FetchingData /> */}
      {/* <FetchingPost /> */}
      <FetchingComments />
    </div>
  );
}

export default App;
