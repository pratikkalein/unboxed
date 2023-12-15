"use client";

import { useEffect, useState } from "react";
import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import { Product } from "./interface/interface";
import ProductCard from "../components/product/ProductCard";
import Link from "next/link";
import { MdArrowForward } from "react-icons/md";


export default function Home() {

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);  
      });
  }, []);

  return (
    <div className="p-8">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <Link href="/all"
          className="flex items-center gap-1 mt-2 mb-3 text-slate-500">
            <span>See All Products</span>
            <MdArrowForward/>
          </Link>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6" >
          {products.map((product:Product) => (
            
            <div key={product.id}>
              <ProductCard data={product}  />
            </div>
          ))}
        </div>


      </Container>
    </div>
  );
}
