import React from "react";
import "./App.css";
import Header from "./Header/Header";
import Container from "./Container/Container";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="navText">
        <p>
          <a>Shop online</a> and get Specialist help, free delivery, and more.
          Some of our stores are offering limited services. Before you visit,
          please check your <a>store’s services</a>.
        </p>
      </div>
      <Container />
      <Footer />
    </div>
  );
}

export default App;
