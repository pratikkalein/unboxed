"use client";

import { Product } from "@/app/interface/interface";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";

type Props = {
    data: Product;
    };

const ProductCard = ({ data }: Props) => {
  const router = useRouter();
  
  return (
    <div 
    onClick={() => router.push(`/product/${data.id}`)}
    className="col-span-1 border-[1.2px] border-slate-500 rounded-md bg-white cursor-pointer p-2 transition hover:scale-105 h-full md:h-auto text-center text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="relative w-full overflow-auto aspect-square">
          <Image 
          fill 
          className="object-contain w-full h-full" 
          src={data.image}
          alt={data.title}/>
        </div>
        <div className="mt-4">
        {truncateText(data.title,20)}
        </div>
        <div><Rating value={data.rating.rate} readOnly/></div>
        <div>{data.rating.count} Reviews</div>
        <div className="text-base font-semibold">${data.price}</div>
      </div>
    </div>

  );
};

export default ProductCard;
