import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");

  const {navigate}=useContext(ShopContext)
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-6 pt-6 sm:pt-10 min-h-[80vh] border-t bg-gray-50 px-4 sm:px-8">
      {/* left side  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] bg-white p-6 rounded-2xl shadow-md border border-gray-100">
        <div className="text-xl sm:text-2xl mb-1">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
          type="email"
          placeholder="Email address"
        />

        <input
          className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
          type="text"
          placeholder="Street"
        />

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
            type="text"
            placeholder="State"
          />
        </div>

        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
            type="number"
            placeholder="Zipcode"
          />
          <input
            className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
            type="text"
            placeholder="Country"
          />
        </div>

        <input
          className="border border-gray-300 rounded-xl py-2.5 px-4 w-full focus:outline-none focus:border-gray-500 transition bg-gray-50"
          type="number"
          placeholder="Phone Number"
        />
      </div>

      {/* Right Side */}
      <div className="mt-8 sm:mt-0">
        <div className="min-w-80 bg-white p-6 rounded-2xl shadow-md border border-gray-100">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* Pyment method selection */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border border-gray-300 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY{" "}
              </p>
            </div>
          </div>


          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className="bg-black text-white px-16 py-3 text-sm">PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
