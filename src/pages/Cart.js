import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../app/cartSlice";
import { toast } from 'react-hot-toast'


const Cart = () => {
  const dispatch=useDispatch()
  const items=useSelector(state=>state.cart)
  const removeCart=(prod)=>{
    dispatch(remove(prod))
    toast.success("Removed From Cart")
  }
  return (
    <div className="container mx-auto lg:w-1/2 w-full pb-24">
      <h1 className="font-bold my-12">Cart Items</h1>
      {
        items.map((item)=>(
          <div key={item._id} className="flex justify-between items-center">
        <div className="flex items-center">
          <img className="h-16" src={item.image} alt="" />
          <span className="font-bold ml-4">{item.name}</span>
        </div>
        <div className="">
          <button className="bg-amber-500  py-2 px-4 rounded-full leading-none">+</button>
          <b className="px-4">1</b>
          <button className="bg-amber-500  py-2 px-4 rounded-full leading-none">-</button>
        </div>
        <p className="font-semibold">Rs. {item.price}</p>
        <button onClick={()=>{removeCart(item.id)}} className="font-semibold px-4 py-2 bg-red-600 rounded-md text-white">Delete</button>
        

      </div>
        ))
      }
      <hr className="my-6"/>
      
      
      
      
    </div>
  );
};

export default Cart;
