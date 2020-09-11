import React from "react";
import { Navbar, Footer } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/about" exact component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
