import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
