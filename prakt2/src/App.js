import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Finish from './components/Finish'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pricing" element={<Pricing />} />
                </Routes>
                <Footer/>
                <Finish/>
            </div>
        </Router>
    );
}

export default App;
