import React, { useState,useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";


const SingleProduct = () => {
  
  const history = useHistory()
  const [product,setProduct]=useState({})
  const params=useParams()
  useEffect(()=>{
    fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
    .then(response=>response.json())
    .then(data=>{setProduct(data)})
},[params._id])

  return (
    <div className="container mt-12 mx-auto">
        <button className="font-bold mb-12" onClick={()=>{history.goBack()}}>Back</button>
      <div className="flex">
        <img src={product.image} alt="" />
        <div className="ml-16">
            <h1 className="font-bold text-xl ">{product.name}</h1>
            <div className="text-md">{product.size}</div>
            <div className="font-bold text-lg pt-2 pb-4">Rs. {product.price}</div>
            <button className="bg-amber-500 py-1 px-8 font-bold rounded-full">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
