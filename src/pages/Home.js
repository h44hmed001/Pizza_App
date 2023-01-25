import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <>
    <div className='hero py-16'>
    <div className='container mx-auto flex items-center'>
      {/* For Text On Left Side*/}
      <div className='w-1/2 pl-6'>
        <h6 className="text-lg"><em>Are You Hungry?</em></h6>
        <h1 className="text-3xl md:text-6xl font-bold">Don't Wait!</h1>
        <button className="mt-4 font-bold text-white bg-amber-500 px-5 py-2 rounded-full hover:bg-yellow-600">Order Now</button>
      </div>
      {/* For Image On Right Side */}
      <div className='w-1/2'>
        <img className="w-4/5" src="/images/pizza.png" alt=""/>
      </div>
    </div>
    </div>
    {/*For Products List On Bottom*/}
    <div className='pb-24'>
      <Products/>

    </div>
    </>
  )
}

export default Home
