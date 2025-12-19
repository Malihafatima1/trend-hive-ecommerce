import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useState(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter((item) => category === item.category);
      productsCopy = productsCopy.filter(
        (item) => subCategory === item.subCategory
      );

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products]);
  return (
    <div className="my-24">
      <div className="text-center text-3xl py-2">
        <Title text1={"RELATED"} text2={"PRODUCTS"} />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 p-3 sm:p-4">

  {related.map((item, index) => (
    <div
      key={index}
      className="bg-white rounded-xl shadow-md hover:shadow-xl duration-300 p-3 border hover:border-gray-300"
    >
      <ProductItem
        id={item._id}
        name={item.name}
        price={item.price}
        image={item.image}
      />
    </div>
  ))}
</div>

    </div>
  );
};

export default RelatedProducts;
