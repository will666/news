import React from "react";
import "./App.css";
import Nav from "./Nav";
import Header from "./Header";
import News from "./News";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Header />
      <News title="General" category="general" />
      <News title="Entertainment" category="entertainment" />
      <News title="Business" category="business" />
      <News title="Politic" category="politic" />
      <News title="Health" category="health" />
      <News title="Science" category="science" />
      <News title="Technology" category="technology" />
      <News title="Sports" category="sports" />
      <Footer />
    </div>
  );
}

export default App;
