import React from "react";
import Navbar from "./global-components/navbar-v2";
import PageHeader from "./global-components/page-header";
import Login from "./section-components/login";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import TopBar from "./global-components/topbar";

const LoginV1 = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <PageHeader headertitle="Account" subheader="Login" />
      <Login />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default LoginV1;
