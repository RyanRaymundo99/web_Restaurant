import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import Booktable from './pages/bootable'
import './App.css';

const App = () => (
  <div>
    <Routes>
      <Route path="booktable" element={ <Booktable /> } />
    </Routes>

    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
