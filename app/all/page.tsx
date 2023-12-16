"use client";

import Container from "@/components/Container";
import { useState, useEffect } from "react";
import { Product } from "../interface/interface";
import ProductCard from "@/components/product/ProductCard";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  Rating,
} from "@mui/material";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    let apiUrl = "https://fakestoreapi.com/products";

    if (category) {
      apiUrl = `https://fakestoreapi.com/products/category/${category}`;
    }

    fetch(apiUrl)
      .then((res) => res.json())
      .then((json) => {
        // Filter products based on selected rating
        const filteredProducts = json.filter((product: Product) => {
          if (rating) {
            return product.rating.rate >= parseInt(rating, 10);
          }
          return true; // Include all products if no rating is selected
        });

        // Sort products based on selected price
        if (price === "highLow") {
          filteredProducts.sort((a: Product, b: Product) => b.price - a.price);
        } else if (price === "lowHigh") {
          filteredProducts.sort((a: Product, b: Product) => a.price - b.price);
        }

        setProducts(filteredProducts);
      });
  }, [category, rating, price]);


  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleReviewChange = (event: SelectChangeEvent) => {
    setRating(event.target.value as string);
  };

  const handlePriceChange = (event: SelectChangeEvent) => {
    setPrice(event.target.value as string);
  };

  const handleClearFilters = () => {
    setCategory("");
    setRating("");
    setPrice("");
  };


  return (
    <div>
      <Container>
        <div className="sticky z-30 grid grid-cols-2 gap-3 px-2 py-4 mt-6 bg-white border rounded-md md:grid-cols-4 md:p-4 md:gap-20 top-16 border-slate-300">
          <div>
            <FormControl variant="standard" fullWidth>
              <InputLabel className="text-xs md:text-base" id="product-category-label">Sort by Categories</InputLabel>
              <Select
                labelId="product-category-label"
                id="product-category"
                value={category}
                label="Category"
                onChange={handleCategoryChange}
              >
                <MenuItem value="men's clothing">Men&apos;s Clothing</MenuItem>
                <MenuItem value="women's clothing">Women&apos;s Clothing</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="jewelery">Jewlery</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="product-reviews-label">Sort by Reviews</InputLabel>
              <Select
                labelId="product-reviews-label"
                id="product-reviews"
                value={rating}
                label="rating"
                onChange={handleReviewChange}
              >
                <MenuItem value={4}><Rating value={4} readOnly /></MenuItem>
                <MenuItem value={3}><Rating value={3} readOnly /></MenuItem>
                <MenuItem value={2}><Rating value={2} readOnly /></MenuItem>
                <MenuItem value={1}><Rating value={1} readOnly /></MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
          <FormControl variant="standard" fullWidth>
              <InputLabel id="product-price-label">Sort by Price</InputLabel>
              <Select
                labelId="product-price-label"
                id="product-price"
                value={price}
                label="price"
                onChange={handlePriceChange}
              >
                <MenuItem value={"highLow"}>High to Low</MenuItem>
                <MenuItem value={"lowHigh"}>Low to High</MenuItem>
              </Select>
            </FormControl>
          </div>
          <button onClick={handleClearFilters} className="px-4 py-2 text-white rounded-md bg-violet-700" >
              Clear
            </button>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
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
