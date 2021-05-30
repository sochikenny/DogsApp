import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
// import Wrapper from "./components/Wrapper"
import Footer from "./components/Footer"
import About from "./pages/About"
import Discover from "./pages/Discover"
import Search from "./pages/Search"

function App() {
  return (
<Router>
<div>
  <Navbar />
    <Route exact path = "/" component={About}/>
    <Route path = "/discover" component={Discover}/>
    <Route path = "/search" component={Search}/>
  <Footer />
</div>
</Router>

  );
}

export default App;
