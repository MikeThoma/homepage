import './App.css';
import Frontpage from './components/page/Frontpage.jsx';
import Navigationbar from './components/layout/Navigationbar.jsx';
import Footer from './components/layout/Footer.jsx';

import Contact from './components/page/Contact.jsx';
import Experience from './components/page/Experience.jsx';
import React from 'react';
import {
  HashRouter as BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {

  return (
    <BrowserRouter>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigationbar />
        <main style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Routes>
            <Route exact path="/" element={<Frontpage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
