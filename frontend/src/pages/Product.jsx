import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };
  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productData ? (
    <div className="pt-10 border-t-2 transition-opacity ease-in duration-500 opacity-100">
      {/* Main Container */}
      <div className="flex flex-col sm:flex-row gap-10 sm:gap-14">
        {/* Left Section: Image List + Main Image */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row gap-4">
          {/* Thumbnail Images */}
          <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-y-auto sm:w-1/5 w-full pb-2">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="
                w-24 sm:w-full cursor-pointer rounded-xl shadow-sm 
                hover:shadow-lg transition-all duration-300 flex-shrink-0
                hover:scale-105 border border-gray-200
              "
                alt="product-thumbnail"
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full sm:w-4/5">
            <img
              src={image}
              className="w-full h-auto rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              alt="selected-product"
            />
          </div>
        </div>

        {/*Product info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex item-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 h-3" />
            <img src={assets.star_icon} alt="" className="w-3 h-3" />
            <img src={assets.star_icon} alt="" className="w-3 h-3" />
            <img src={assets.star_icon} alt="" className="w-3 h-3" />
            <img src={assets.star_dull_icon} alt="" className="w-03 h-3" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border bg-white px-5 py-2 rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all duration-200 text-gray-700 font-medium ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            AD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 border-gray-200" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy wihtin 7 days.</p>
          </div>
        </div>
      </div>

      {/*Decription and Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className="border border-gray-300 px-6 py-3 text-sm font-medium bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
            Description
          </b>
          <p className="border border-gray-300 px-6 py-3 text-sm font-medium bg-gray-50 hover:bg-gray-100 cursor-pointer transition">
            Reviews (122)
          </p>
        </div>
        <div className="flex flex-col gap-4 border border-gray-300 px-6 py-6 text-sm text-gray-500">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet temporibus beatae odit aperiam provident laboriosam voluptatibus tenetur ea eaque ab, repudiandae aut qui illo sit eum hic asperiores. Adipisci, optio.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium numquam eos, sequi doloremque molestias quam inventore et voluptate aliquid illum enim quis cupiditate mollitia. Consectetur atque nisi inventore quo reiciendis.</p>
        </div>
      </div>


      
      {/*dispaly related products*/}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
