"use client";

import Container from "@/components/Container";
import { IProduct, Product } from "@/app/interface/interface";
import ProductDetails from "./ProductDetails";
import { useState, useEffect } from "react";

const ProductPage = ({ params }: { params: IProduct }) => {
  console.log("params", params);

  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  }, [params.id]);

  console.log("product", product);

  return (
    <>
      {product && (
        <div className="p-8">
          <Container>
            <div>
              <ProductDetails data={product} />
            </div>
          </Container>
        </div>
      )}
    </>
  );
};

export default ProductPage;
