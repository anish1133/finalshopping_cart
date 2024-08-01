import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

 const CartItems = ({item,itemIndex}) =>{ 

    const dispatch = useDispatch();

    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed From Cart");
    }

    return(
        <div className=" flex flex-col ">
        <div className="w-[590px] h-[360px] flex  gap-x-16 justify-center">
            <div className=" ">
                <div className="h-[80px] w-[160px]">
                    <img src={item.image}  />
                </div>
            </div>
            <div>
                <div className=" flex flex-col gap-y-5">
                    <h1 className="font-bold text-[18px]" >{item.title} </h1>
                    <h2 className="tetx-[16px]">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h2>
                    
                    <div className="flex flex-row justify-between p-4 items-baseline">
                        <p   className="text-green-600 font-semibold text-xl">${item.price}</p>
                        <div
                            onClick={removeFromCart}
                            >
                            <MdDelete  />
                        </div>
                    </div>
                   
                    
                </div>
                
            </div>
            </div>
            <div className="w-full bg-green-700 h-[2px] -mt-24 mb-8" ></div>
        </div>
    )
};

export default CartItems;