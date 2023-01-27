import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import ShogGrid from "./shop-components/shop-grid-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import TopBar from "./global-components/topbar";

const Properties = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PageHeader headertitle="Properties" />
      <ShogGrid />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Properties;
