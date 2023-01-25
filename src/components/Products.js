 import React from 'react'
 import Product from './Product'
 import {useState,useEffect} from 'react'
 

 
 const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(()=>{
    fetch('https://star-spark-pasta.glitch.me/api/products').then(response=>response.json()).then(data=>{
      setProducts(data)
    },[])

  })
   return (
    // Containing Everything
     <div className='container mx-auto pb-24'>
        {/* Product Heading On Top */}
        <h1 className='font-bold text-lg pl-6 my-10'>Products</h1>
        {/* List Of Products */}
        <div className='grid grid-cols-5 gap-24'>
            {/* Individual Product */}
            {
              products.map(product=><Product key={product._id} product={product}/>)
            }
        </div>
     </div>
   )
 }
 export default Products
 