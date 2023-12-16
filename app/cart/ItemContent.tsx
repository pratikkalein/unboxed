import Link from "next/link";
import { Product } from "../interface/interface";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

interface ItemContentProps {
  item: Product;
}

const ItemContet: React.FC<ItemContentProps> = ({ item }) => {
   
  return (
    <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center">
        <div className="flex col-span-2 gap-2 justify-self-start md:gap-4">
            <Link href={`/product/${item.id}`}> 
                <div className="relative w-[70px] aspect-square">
                    <Image src={item.image} alt={item.title} fill className="object-contain" />
                </div> 
            </Link>
            <div className="flex flex-col justify-between">
            <Link href={`/product/${item.id}`}> 
                {truncateText(item.title, 28)}
                <div className="w-[70px]">
                    <button className="underline text-slate-500">
                        Remove
                    </button>
                </div>
            </Link>
            </div>
        </div>
        <div className="justify-self-center">${item.price}</div>
        <div className="justify-self-center"> <div className="flex items-center gap-4 text-base">
           
            <div className="text-xs">1</div>
           
          </div></div>
        <div className="font-semibold justify-self-end">${item.price * 1}</div>
    </div>
  );
};

export default ItemContet;
