import React from "react";
import Header from "../Header/Header";
import SearchBar from "../../features/searchBar/SearchBar";
import Feed from "../../features/feed/Feed";
import Footer from "../Footer/Footer";

function Root() {
  return (
    <>
      <Header />
      <SearchBar />
      <Feed />
      <Footer />
    </>
  );
}

export default Root;
