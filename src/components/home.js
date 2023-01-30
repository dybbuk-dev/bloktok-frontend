import React from "react";
import Navbar from "./global-components/navbar-v3";
import Banner from "./section-components/banner-v3";
import Features from "./section-components/features-v1";
import ProductSlider from "./section-components/product-slider-v3";
import FeaturedItem from "./section-components/featured-item-v1";
import Sponsor from "./section-components/sponsor-v1";
import BlogSlider from "./blog-components/blog-slider-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Features customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
      <ProductSlider />
      <FeaturedItem />
      <Sponsor />
      <BlogSlider sectionClass="pt-120" />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home;
