import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerCarousel from "../components/BannerCarousel";

function MainLayout() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="app-container">
      <BannerCarousel />

      <Header
        searchText={searchText}
        onSearchChange={setSearchText}
      />

      <main className="content container my-4">
        <Outlet context={{ searchText }} />
      </main>

      <Footer
        avatar="/img/anh.webp"
        name="traltb"
        email="hienhmde@fpt.edu.vn"
      />
    </div>
  );
}

export default MainLayout;
