import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { motion } from "framer-motion";
import heroImg from "../assets/images/delivery.jpg";
import ProductList from "../components/UI/ProductList";

import useGetData from "../custom-hooks/useGetData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Sdata from "./Sdata";
import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      // margin: "-20px"
      return <ul style={{ marginBottom: "-65px" }}>{dots}</ul>;
    },
  };

  const { data: products, loading } = useGetData("products");

  const [mobileProducts, setMobileProducts] = useState([]);

  useEffect(() => {
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );

    setMobileProducts(filteredMobileProducts);
  }, [products]);

  return (
    <Helmet title={"Home"}>
      <section className="hero__section">
        <Grid
          container
          spacing={4}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item xs={12} md={4}>
            <div className="hero__img">
              <motion.img whileHover={{ scale: 1.1 }} src={heroImg} alt="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6} className="homeSlide">
            <Slider {...settings}>
              {Sdata.map((value, index) => {
                return (
                  <>
                    <div className="box d_flex top" key={value.id}>
                      <div className="left">
                        <h1>{value.title}</h1>
                        <p>{value.desc}</p>
                        <button
                          className="btn-primary"
                          onClick={() => navigate("/shop")}
                        >
                          Visit Collections
                        </button>
                      </div>
                      <div className="right">
                        <img src={value.cover} alt="" />
                      </div>
                    </div>
                  </>
                );
              })}
            </Slider>
          </Grid>
        </Grid>
      </section>

      <section className="new__arrivals">
        <Grid container>
          <Grid item xs={12} textAlign={"center"} mb={5}>
            <Typography
              variant="h2"
              className="section__title"
              fontWeight={600}
              fontSize={32}
              lineHeight={0.8}
            >
              New Arrivals
            </Typography>
          </Grid>
          {loading ? (
            <h5 className="fw-bold">Loading...</h5>
          ) : (
            <ProductList data={mobileProducts} />
          )}
        </Grid>
      </section>

      <section className="new__arrivals">
        <Grid container>
          <Grid item xs={12} textAlign={"center"} mb={5}>
            <Typography
              variant="h2"
              className="section__title"
              fontWeight={600}
              fontSize={32}
              lineHeight={0.8}
            >
              Flash Deals
            </Typography>
          </Grid>
          {loading ? (
            <h5 className="fw-bold">Loading...</h5>
          ) : (
            <ProductList data={mobileProducts} />
          )}
        </Grid>
      </section>
    </Helmet>
  );
};

export default Home;
