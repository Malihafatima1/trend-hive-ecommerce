import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg rounded-2xl p-4 sm:p-6 border border-gray-200">
      <div className="text-xl sm:text-2xl mb-4">
        <Title text1={"CART"} text2={"TOTALS"} />
      </div>
  
      <div className="flex flex-col gap-2 sm:gap-3 text-sm">
        {/* Subtotal */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Subtotals</p>
          <p className="font-medium">
            {currency} {getCartAmount()}.00
          </p>
        </div>
  
        <hr className="border-gray-200" />
  
        {/* Shipping */}
        <div className="flex justify-between items-center">
          <p className="text-gray-600">Shipping Fee</p>
          <p className="font-medium">
            {currency} {delivery_fee}.00
          </p>
        </div>
  
        <hr className="border-gray-200" />
  
        {/* Total */}
        <div className="flex justify-between items-center">
          <b className="text-base">Total</b>
          <b className="text-base">
            {currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </b>
        </div>
      </div>
    </div>
  )};
  

export default CartTotal;
