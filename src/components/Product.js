import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { add } from "../app/cartSlice";

const Product = ({product}) => {
  const dispatch=useDispatch()
  
    // const cart={
    //   items:{
    //   '60c67b7ef5ee510015f3dda4':2,
    //   '60c67acaf5ee510015f3dd9f':3},
    //   totalItems:5
    // }
    const handleAdd=(event,prod)=>{
      event.preventDefault()
      dispatch(add(prod))
      toast.success("Added To Cart")
    }


  

  return (
    <Link to={`/products/${product._id}`}>
      <div className="pl-6 mr-6">
        <img src={product.image} alt="" />
        <div className="text-center">
          <h2 className="font-bold text-lg py-2">{product.name}</h2>
          {/* Pizza Size */}
          <span className="bg-gray-200 py-1 rounded-full text-sm px-4">
            {product.size}
          </span>
        </div>
        <div className="flex justify-between mt-4">
          <span>Rs. {product.price}</span>
          {/* Button ADD */}
          <button onClick={(e)=>{handleAdd(e,product)}} className="bg-amber-500 py-1 px-3 rounded-full font-bold">
            ADD
          </button>
        </div>
      </div>
      </Link>
  );
};

export default Product;
