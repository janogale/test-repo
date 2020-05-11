import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Components
import App from "./App";
import Header from "./components/Header";
import AboutPage from "./components/About";
import ContactPage from "./components/Contact";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFound";

export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
