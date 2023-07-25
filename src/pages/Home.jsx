import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
  return (
      <div className="d-flex flex-column h-100">
        <main className="flex-shrink-0">
          <Header />
        </main>
      </div>
  );
};

export default Home;
