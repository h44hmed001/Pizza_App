
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navigation = () => {
  const cartStyle={
    'padding':'6px 12px',
    'borderRadius':'50px',

  }
  const items=useSelector(state=>state.cart)
  return (
      <div className="m-2">
        <nav className="container mx-auto flex justify-between py-3">
            {/*Logo in Nav*/}
          <Link to="/">
            <img className="w-4/5" src="/images/logo.png" alt="" />
          </Link>
          {/*Items in Nav*/}
          <ul className="flex items-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="pl-6">
              <Link to="/products">Products</Link>
            </li>
          {/*Cart in Nav*/}
          <li className="pl-6">
          <Link to="/cart">
          <div style={cartStyle} className="bg-amber-500 flex py-1 font-bold px-4">
            <span>{items.length}</span>
            <img className="ml-1" src="/images/cart.png" alt="" />
            </div>
            </Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default Navigation;
