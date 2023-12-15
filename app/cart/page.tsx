"use client";
import Container from "@/components/Container";
import CartClient from "./CartClient";
import { useState, useEffect } from "react";
import { Product } from "../interface/interface";

const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=2")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);
  return (
    <div className="pt-8">
      <Container>
        {products && (
            <CartClient  products={products}/>
        )}
        
      </Container>
    </div>
  );
};

export default Cart;
