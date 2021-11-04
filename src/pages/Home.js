import React, { useState } from "react";
import Crud from "../components/Crud";
import Header from "../components/Header";

const Home = () => {


  return (
    <div className="App">
      <Header />
      <div className="form-wrapper">
        <Crud />
      </div>
    </div>
  );
};

export default Home;
