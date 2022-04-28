import React from "react";
import { Header, Content } from "../components/index";

const Layout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100">
        <Header />
        <div className="body flex-grow-1 px-3">
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Layout;
