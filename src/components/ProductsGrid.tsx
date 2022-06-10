import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "./Product";

const ProductsGrid = () => {
  const [products, setProducts] = useState([] as any[]);

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
      )
      .then((res) => setProducts(res.data));
  }, []);
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x">
      {products.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
