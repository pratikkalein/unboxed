import { Product } from "@/app/interface/interface";
import { Rating } from "@mui/material";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Offers from "@/components/Offers";

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

type ProductDetailsProps = {
  data: Product;
};

const btnStyle = "border-[1.2px] broder-slate-300 cursor-pointer px-2 rounded";

const ProductDetails: React.FC<ProductDetailsProps> = ({ data }) => {
  const [quantity, setQuantity] = useState(1);
  const handleQtyIncrease = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };
  const handleQtyDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const [buttonText, setButtonText] = useState("Add To Cart");
  const router = useRouter();

  const handleClick = () => {
    setButtonText("Added To Cart");
    toast.success("Product Added To Cart");
    setTimeout(() => {
        router.push('/cart'); 
      }, 1500);
  };

  return (
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      <div className="">
        <div className="relative max-w-md m-auto overflow-auto aspect-square">
          <Image
            fill
            className="object-contain w-full h-full "
            src={data.image}
            alt={data.title}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <h2 className="text-3xl font-medium text-slate-700">{data.title}</h2>
        <h3 className="text-xl font-bold">${data.price}</h3>
        <div className="flex items-center gap-2 mt-2">
          <Rating value={data.rating.rate} readOnly />
          <div>{data.rating.count} Reviews</div>
        </div>
        <Horizontal />
        <div className="mt-2 text-justify">{data.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">CATEGORY:</span> {data.category}
        </div>
        <Horizontal />
        <div className="flex items-center gap-4">
          <div className="font-semibold">QUANTITY:</div>
          <div className="flex items-center gap-4 text-base">
            <button className={btnStyle} onClick={handleQtyDecrease}>
              -
            </button>
            <div>{quantity}</div>
            <button className={btnStyle} onClick={handleQtyIncrease}>
              +
            </button>
          </div>
        </div>
        <Horizontal />
        <button
          onClick={handleClick}
          className={`max-w-xs px-4 py-2 mt-2 font-semibold text-white rounded-md font ${
            buttonText === "Added To Cart"
              ? "bg-none border-2 border-slate-800 text-black"
              : "bg-slate-700"
          }`}
        >
          {buttonText}
        </button>

        <div className="mt-2">
          <Offers/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
