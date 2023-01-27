import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import Error from "./section-components/error";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import TopBar from "./global-components/topbar";

const ErrorPage = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PageHeader headertitle="404 Page" />
      <Error />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default ErrorPage;
