import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/shop.css";
import ProductList from "../components/UI/ProductList";
import { Grid, Typography } from "@mui/material";
import useGetData from "../custom-hooks/useGetData";
import { useSelector } from "react-redux";

const Shop = () => {
  const { data: products, loading } = useGetData("products");
  const inputValue = useSelector((state) => state.search.inputValue);

  const [productsData, setProductsData] = useState(products);

  useEffect(() => {
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    setProductsData(filteredMobileProducts);
  }, [products]);

  useEffect(() => {
    const valueUpdating = inputValue.inputValue;
    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(valueUpdating.toLowerCase())
    );
    setProductsData(searchedProducts);
  }, [inputValue]);

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "headphones") {
      const filterProducts = products.filter(
        (item) => item.category === "headphones"
      );
      setProductsData(filterProducts);
    }

    if (filterValue === "mobile") {
      const filterProducts = products.filter(
        (item) => item.category === "mobile"
      );
      setProductsData(filterProducts);
    }

    if (filterValue === "speakers") {
      const filterProducts = products.filter(
        (item) => item.category === "speakers"
      );
      setProductsData(filterProducts);
    }

    if (filterValue === "accessories") {
      const filterProducts = products.filter(
        (item) => item.category === "accessories"
      );
      setProductsData(filterProducts);
    }

    if (filterValue === "wireless") {
      const filterProducts = products.filter(
        (item) => item.category === "wireless"
      );
      setProductsData(filterProducts);
    }
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setProductsData(searchedProducts);
  };

  // useEffect

  return (
    <Helmet>
      <CommonSection title="Products" />

      <section>
        <Grid container>
          <Grid lg={3} md={6}>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option> Filter By Category</option>
                <option value="mobiles">Mobile</option>
                <option value="headphones">Headphones</option>
                <option value="speakers">Speakers</option>
                <option value="accessories">Accessories</option>
                <option value="wireless">Wireless</option>
              </select>
            </div>
          </Grid>
          <Grid lg={3} md={6} className="text-end">
            <div className="filter__widget">
              <select>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Grid>
          <Grid lg={6} md={12}>
            <div className="search__box">
              <input
                type="text"
                placeholder="Search..."
                onChange={handleSearch}
              />
              <span>
                <i className="fa fa-search"></i>
              </span>
            </div>
          </Grid>
        </Grid>
      </section>

      <section className="pt-0">
        <Grid container>
          {productsData.length === 0 ? (
            <Typography variant="h1" textAlign={"center"} fontSize={32}>
              No products are found!
            </Typography>
          ) : (
            <ProductList data={productsData} />
          )}
        </Grid>
      </section>
    </Helmet>
  );
};

export default Shop;
