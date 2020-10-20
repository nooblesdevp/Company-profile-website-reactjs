import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";
import Product from "./components/pages/Product/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/services" component={Services} />
        <Route path="/product" component={Product} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
