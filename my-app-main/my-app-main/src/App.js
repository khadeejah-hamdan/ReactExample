import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../src/layouts/Navbar";
import Footer from "../src/layouts/Footer";
import Gallery from "./Gallery";
import TodoList from "./Todo";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
