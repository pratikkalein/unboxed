"use client";

import Container from "@/components/Container";
import { useState, useEffect } from "react";
import { Product } from "../interface/interface";
import ProductCard from "@/components/product/ProductCard";
import {
  Rating,
} from "@mui/material";
import TemporaryDrawer from "@/components/Drawer";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");
  const [productName, setproductName] = useState("");
  const [apiData, setApiData] = useState<Product[]>([]);

  useEffect(() => {
    const apiUrl = "https://fakestoreapi.com/products";

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
        setApiData(json);
      });
  }, []);

  useEffect(() => {
    
    let filteredProducts = apiData;

    if (category) {
      filteredProducts = apiData.filter((product: Product) => {
        return product.category === category;
      });
    }
    
    if (rating) {
      filteredProducts = filteredProducts.filter((product: Product) => product.rating.rate >= parseInt(rating, 10));
    }

    if (productName) {
      filteredProducts = apiData.filter((product: Product) => {
        return product.title.toLowerCase().includes(productName.toLowerCase());
      });
    }

    if (price === "highLow") {
      filteredProducts.sort((a: Product, b: Product) => b.price - a.price);
    } else if (price === "lowHigh") {
      filteredProducts.sort((a: Product, b: Product) => a.price - b.price);
    } 

    setProducts(filteredProducts);
    
  }, [category, rating, price, productName, apiData]);

  const handleCategoryButtonClick = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  const handleReviewButtonClick = (selectedRating: string) => {
    setRating(selectedRating);
  };

  const handlePriceSortButtonClick = (selectedPriceSort: string) => {
    setPrice(selectedPriceSort);
  };

  const handleClearFilters = () => {
    setCategory("");
    setRating("");
    setPrice("");
    setproductName("");
    setProducts(apiData);
  };

  return (
    <div>
      <Container>
        <div className="sticky z-30 mt-1 bg-white rounded-md top-[4rem] md:hidden">
          <TemporaryDrawer>
            <div className="p-4">
              <h1 className="text-xl font-bold text-violet-700">
                Filter & Sorting
              </h1>

              <div className="flex flex-col mt-4">
                <h1 className="font-bold text-gray-600 ">Categories </h1>
                <button
                  onClick={() => handleCategoryButtonClick("men's clothing")}
                  className="text-left md:w-1/2"
                >
                  Men&apos;s Clothing
                </button>
                <button
                  onClick={() => handleCategoryButtonClick("women's clothing")}
                  className="w-1/2 text-left"
                >
                  Women&apos;s Clothing
                </button>
                <button
                  onClick={() => handleCategoryButtonClick("electronics")}
                  className="w-1/2 text-left"
                >
                  Electronics
                </button>
                <button
                  onClick={() => handleCategoryButtonClick("jewelery")}
                  className="w-1/2 text-left"
                >
                  Jewelry
                </button>
              </div>
              
              <div className="flex flex-col my-4">
                <h1 className="mb-2 font-bold text-gray-600">Ratings </h1>
                  <button
                    onClick={() => handleReviewButtonClick("4")}
                    className="text-left"
                  >
                     <Rating value={4} readOnly />
                  </button>
                  <button
                    onClick={() => handleReviewButtonClick("3")}
                    className="text-left"
                  >
                    <Rating value={3} readOnly />
                  </button>
                  <button
                    onClick={() => handleReviewButtonClick("2")}
                    className="text-left"
                  >
                    <Rating value={2} readOnly />
                  </button>
                  <button
                    onClick={() => handleReviewButtonClick("1")}
                    className="text-left"
                  >
                    <Rating value={1} readOnly />
                  </button>
                </div>

                <div className="flex flex-col my-4">
                <h1 className="mb-2 font-bold text-gray-600">Price </h1>
                  <button onClick={() => handlePriceSortButtonClick("lowHigh")} className="text-left">Low to High</button>
                  <button onClick={() => handlePriceSortButtonClick("highLow")} className="text-left">High to Low</button>
                </div>
        
            </div>
            <div className="text-center">
              <button
                onClick={handleClearFilters}
                className="px-6 py-1 mt-2 text-base text-white rounded-md bg-violet-700"
              >
                Clear
              </button>
            </div>
          </TemporaryDrawer>
        </div>

        <div className="hidden grid-cols-4 gap-4 mt-8 md:grid">
          <div className="relative hidden col-span-1 md:block">
            <div className="sticky top-[6rem] p-4 bg-gray-100">
              <div className="p-4">
                <h1 className="text-xl font-bold text-violet-700">
                  Filter & Sorting
                </h1>
                <h1 className="mt-4 font-bold text-gray-600 ">Search </h1>
                <input
                  className="w-full p-2 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-700 focus:border-transparent"
                  onChange={(e) => {
                    setproductName(e.target.value);
                  }}
                  type="text"
                />
                <div className="flex flex-col mt-4">
                  <h1 className="font-bold text-gray-600 ">Categories </h1>
                  <button
                    onClick={() => handleCategoryButtonClick("men's clothing")}
                    className="w-1/2 text-left"
                  >
                    Men&apos;s Clothing
                  </button>
                  <button
                    onClick={() =>
                      handleCategoryButtonClick("women's clothing")
                    }
                    className="w-1/2 text-left"
                  >
                    Women&apos;s Clothing
                  </button>
                  <button
                    onClick={() => handleCategoryButtonClick("electronics")}
                    className="w-1/2 text-left"
                  >
                    Electronics
                  </button>
                  <button
                    onClick={() => handleCategoryButtonClick("jewelery")}
                    className="w-1/2 text-left"
                  >
                    Jewelry
                  </button>
                </div>

                <div className="flex flex-col my-4">
                <h1 className="mb-2 font-bold text-gray-600">Ratings </h1>
                  <button
                    onClick={() => handleReviewButtonClick("4")}
                    className="text-left"
                  >
                     <Rating value={4} readOnly />
                  </button>
                  <button
                    onClick={() => handleReviewButtonClick("3")}
                    className="text-left"
                  >
                    <Rating value={3} readOnly />
                  </button>
                  <button
                    onClick={() => handleReviewButtonClick("2")}
                    className="text-left"
                  >
                    <Rating value={2} readOnly />
                  </button>
                  <button
                    onClick={() => handleReviewButtonClick("1")}
                    className="text-left"
                  >
                    <Rating value={1} readOnly />
                  </button>
                </div>

                <div className="flex flex-col my-4">
                <h1 className="mb-2 font-bold text-gray-600">Price </h1>
                  <button onClick={() => handlePriceSortButtonClick("lowHigh")} className="text-left">Low to High</button>
                  <button onClick={() => handlePriceSortButtonClick("highLow")} className="text-left">High to Low</button>
                </div>
        
              </div>
              <div className="text-center">
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-1 mt-2 text-base text-white rounded-md bg-violet-700"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-3 gap-8 md:grid-cols-3 lg:grid-cols-4 md:grid-col-3">
            {products.map((product: Product) => (
              <div key={product.id}>
                <ProductCard data={product} />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mt-4 md:hidden">
          {products.map((product: Product) => (
            <div key={product.id}>
              <ProductCard data={product} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
