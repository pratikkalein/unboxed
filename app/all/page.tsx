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
import TemporaryDrawer from "@/components/Drawer";


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
        const filteredProducts = json.filter((product: Product) => {
          if (rating) {
            return product.rating.rate >= parseInt(rating, 10);
          }
          return true;
        });

        if (price === "highLow") {
          filteredProducts.sort((a: Product, b: Product) => b.price - a.price);
        } else if (price === "lowHigh") {
          filteredProducts.sort((a: Product, b: Product) => a.price - b.price);
        }

        setProducts(filteredProducts);
      });
  }, [category, rating, price]);

  function handleCategoryChange(event: SelectChangeEvent): void {
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
      <Container >
        <div className="sticky z-30 mt-1 bg-white rounded-md top-[4rem] md:hidden">
          <TemporaryDrawer>
            <div className="p-4">
              <h1 className="text-xl font-bold text-violet-700">Filters</h1>
              <div className="mt-4">
                <FormControl size="small" className="mt-3"  fullWidth>
                  <InputLabel
                    className="text-xs md:text-base"
                    id="product-category-label"
                  >
                    Categories
                  </InputLabel>
                  <Select
                    labelId="product-category-label"
                    id="product-category"
                    value={category}
                    label="Category"
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value="men's clothing">
                      Men&apos;s Clothing
                    </MenuItem>
                    <MenuItem value="women's clothing">
                      Women&apos;s Clothing
                    </MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="jewelery">Jewlery</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="mt-4">
                <FormControl size="small" className="mt-3"fullWidth>
                  <InputLabel
                    className="text-xs md:text-base"
                    id="product-reviews-label"
                  >
                    Reviews
                  </InputLabel>
                  <Select
                    labelId="product-reviews-label"
                    id="product-reviews"
                    value={rating}
                    label="rating"
                    onChange={handleReviewChange}
                  >
                    <MenuItem value={4}>
                      <Rating value={4} readOnly />
                    </MenuItem>
                    <MenuItem value={3}>
                      <Rating value={3} readOnly />
                    </MenuItem>
                    <MenuItem value={2}>
                      <Rating value={2} readOnly />
                    </MenuItem>
                    <MenuItem value={1}>
                      <Rating value={1} readOnly />
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="mt-4">
                <FormControl size="small" className="mt-3" fullWidth>
                  <InputLabel
                    className="text-xs md:text-base"
                    id="product-price-label"
                  >
                    Price
                  </InputLabel>
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
              <h1 className="text-xl font-bold text-violet-700">Filters</h1>
              <div className="mt-4">
                <FormControl size="small" fullWidth>
                  <InputLabel
                    className="text-xs md:text-base"
                    id="product-category-label"
                  >
                    Categories
                  </InputLabel>
                  <Select
                    labelId="product-category-label"
                    id="product-category"
                    value={category}
                    label="Category"
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value="men's clothing">
                      Men&apos;s Clothing
                    </MenuItem>
                    <MenuItem value="women's clothing">
                      Women&apos;s Clothing
                    </MenuItem>
                    <MenuItem value="electronics">Electronics</MenuItem>
                    <MenuItem value="jewelery">Jewlery</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="mt-4">
                <FormControl size="small" fullWidth>
                  <InputLabel
                    className="text-xs md:text-base"
                    id="product-reviews-label"
                  >
                    Reviews
                  </InputLabel>
                  <Select
                    labelId="product-reviews-label"
                    id="product-reviews"
                    value={rating}
                    label="rating"
                    onChange={handleReviewChange}
                  >
                    <MenuItem value={4}>
                      <Rating value={4} readOnly />
                    </MenuItem>
                    <MenuItem value={3}>
                      <Rating value={3} readOnly />
                    </MenuItem>
                    <MenuItem value={2}>
                      <Rating value={2} readOnly />
                    </MenuItem>
                    <MenuItem value={1}>
                      <Rating value={1} readOnly />
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className="mt-4">
                <FormControl size="small" fullWidth>
                  <InputLabel
                    className="text-xs md:text-base"
                    id="product-price-label"
                  >
                    Price
                  </InputLabel>
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
