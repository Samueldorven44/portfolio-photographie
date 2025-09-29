import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavbarPortfolio from "./components/NavbarPortfolio";
import Layout from "./components/Layout";
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
      <Layout>
        <NavbarPortfolio />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* Route pour les pages inexistantes */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
