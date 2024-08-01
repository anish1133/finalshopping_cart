import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import CartItems from "../components/CartItems"


 const Cart = () =>{ 

    const{cart} = useSelector( (state) => state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect ( () => {
      setTotalAmount( cart.reduce( (acc,curr) => acc + curr.price,0) );  
    }, [cart]);

    return(
        <div>
        {
           cart.length > 0 ? 
           (<div className="w-full h-full flex  flex-row py-10 px-32 justify-between mx-auto ml-24 mr-24">
                <div className="w-full h-full flex flex-col mr-24">
                    {
                        cart.map( (item,index) => {
                            return <CartItems key={item.id} item={item} itemIndex={item} />
                        } )
                    }
                </div>
                 
                <div className="w-full flex flex-col gap-y-[300px]  ">
                    <div className="flex flex-col justify-start "> 
                        <div className="text-3xl text-green-600 font-semibold uppercase">Your Cart</div>
                        <div className="text-6xl text-green-600 font-semibold uppercase">Summary</div>
                        <p className="text-xl text-black mt-2 ">
                            <span>Total Items: {cart.length}</span>
                        </p>
                    </div>

                    <div className="flex flex-col p-3">
                        <p className="text-xl text-black mt-2 ">Total Amount : <span className="font-bold">${totalAmount}</span></p>
                        <NavLink to={"/"}>
                            <button
                            className="text-black text-2xl font-bold hover:bg-green-600 rounded-md p-1 px-3 mt-3
                                    bg-gray-400 hover:text-white transition duration-300 ease-in w-[360px] h-10
                                    "
                            >
                                CheckOut Now
                            </button>
                        </NavLink>
                    </div>
                </div>
                
           </div>) 
           :
            (<div className="w-full flex justify-center items-center flex-col h-[100vh]">
                <h1 className="text-3xl font-bold text-green-600">Your Cart is empty</h1>
                <Link to={"/"}>
                    <button 
                    className="text-black text-2xl font-bold hover:bg-green-600 rounded-md p-1 px-3 mt-3
                                    bg-gray-400 hover:text-white transition duration-300 ease-in w-[300px] h-10
                                    "
                    >
                        Shop Now
                    </button>
                </Link>
            </div>)
        }
        </div>
    )
};

export default Cart;