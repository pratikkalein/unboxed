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
} from "@mui/material";

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProducts(json);
      });
  }, []);

  useEffect(() => {
    if (category) {
      fetch("https://fakestoreapi.com/products/category/" + category)
        .then((res) => res.json())
        .then((json) => {
          setProducts(json);
        });
    }
  }, [category]);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <div>
      <Container>
        <div className="sticky z-30 grid grid-cols-3 gap-3 px-2 py-4 mt-6 bg-white border rounded-md md:p-4 md:gap-20 top-16 border-slate-200">
          <div>
            <FormControl fullWidth>
              <InputLabel id="product-category-label">Categories</InputLabel>
              <Select
                labelId="product-category-label"
                id="product-category"
                value={category}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem value="men's clothing">Men&apos;s Clothing</MenuItem>
                <MenuItem value="women's clothing">Women&apos;s Clothing</MenuItem>
                <MenuItem value="electronics">Electronics</MenuItem>
                <MenuItem value="jewelery">Jewlery</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div>
            <label
              htmlFor="sortByRating"
              className="block mb-2 text-xs font-medium text-gray-900 md:text-sm"
            >
              Sory by Ratings
            </label>
            <select
              id="sortByRating"
              className="block w-full p-1 text-xs text-gray-900 border border-gray-300 rounded-lg md:text-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="sortByCategory"
              className="block mb-2 text-xs font-medium text-gray-900 md:text-sm"
            >
              Sory by Ratings
            </label>
            <select
              id="sortByCategory"
              className="block w-full p-1 text-xs text-gray-900 border border-gray-300 rounded-lg md:text-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
            >
              <option value="men's clothing">Men&apos;s Clothing</option>
              <option value="women's clothing">Women&apos;s Clothing</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewlery</option>
            </select>
          </div>
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
