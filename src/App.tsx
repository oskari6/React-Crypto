import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CryptoPrices from "./pages/CryptoPrices";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <div className="outer-wrapper">
        <Heading />
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<CryptoPrices />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
