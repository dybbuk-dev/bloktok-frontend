import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import ProductSlider from "./shop-components/product-slider-v1";
import ProductDetails from "./shop-components/shop-details";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import TopBar from "./global-components/topbar";

const Property_Details = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PageHeader headertitle="Property Details" customclass="mb-0" />
      <ProductSlider />
      <ProductDetails />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Property_Details;
