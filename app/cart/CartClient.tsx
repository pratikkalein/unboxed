import Link from "next/link";
import { Product } from "../interface/interface";
import { MdArrowBack } from "react-icons/md";
import ItemContet from "./ItemContent";
import { useState } from "react";

type Props = {
  products: Product[];
};

const CartClient: React.FC<Props> = ({ products }) => {
    const [total, setTotal] = useState(0);
    const subtotal = products.reduce((acc, product) => acc + product.price, 0);

  return (
    <div>
      <h1 className="text-xl font-semibold text-center text-slate-700">
        Shopping Cart
      </h1>
      <div className="grid items-center grid-cols-5 gap-4 pb-2 mt-8 text-xs">
        <div className="col-span-2 justify-self-start">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <div>
        {products.map((item: Product) => {
          return <ItemContet key={item.id} item={item} />;
        })}
      </div>
      <div className="border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4">
        <div>
          <button className="max-w-xs px-4 py-2 mt-2 font-semibold border-2 rounded-md border-slate-800 text-slate-700">
            Clear Cart
          </button>
        </div>
        <div className="flex flex-col items-start gap-1 text-sm">
          <div className="flex justify-between w-full text-base font-semibold">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <p className="text-slate-500">
            Taxes and shipping calculate at checkout
          </p>
          <button className="w-full px-4 py-2 mt-2 font-semibold text-white rounded-md bg-slate-700">
            Checkout
          </button>
          <Link href="/"
          className="flex items-center gap-1 mt-2 text-slate-500">
            <MdArrowBack/>
            <span>Continue Shopping</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
