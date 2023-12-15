"use client";

import { useEffect, useState } from "react";
import Container from "../components/Container";
import HomeBanner from "../components/HomeBanner";
import { Product } from "./interface/interface";
import ProductCard from "../components/product/ProductCard";


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
