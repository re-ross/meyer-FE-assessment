import axios from "axios";
import { useEffect } from "react";
import ProductsGrid from "./components/ProductsGrid";

function App() {
  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => console.log(res.data));
  }, []);

  return (
    <div className="App">
      <ProductsGrid />
    </div>
  );
}

export default App;
