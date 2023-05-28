import React from "react";
import Footer from "./footer";
import Header from "./header";

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
