import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explorer from "./pages/Explorer"
import Thailande from "./pages/Thailande";
import Philippines from "./pages/Philippines";
import Singapour from "./pages/Singapour";
import Vietnam from "./pages/Vietnam";
import Laos from "./pages/Laos";
import Indonesie from "./pages/Indonesie";
import Japon from "./pages/Japon";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavbarPortfolio from "./components/home/NavbarPortfolio";
import Layout from "./components/home/Layout";
import Footer from "./components/home/Footer"

function App() {
  return (
    <Router>
      <Layout>
        <NavbarPortfolio />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/explorer' element={<Explorer />} />
            <Route path='/thailande' element={<Thailande />} />
            <Route path='/philippines' element={<Philippines />} />
            <Route path='/singapour' element={<Singapour />} />
            <Route path='/vietnam' element={<Vietnam />} />
            <Route path='/laos' element={<Laos />} />
            <Route path='/indonesie' element={<Indonesie />} />
            <Route path='/japon' element={<Japon />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </Layout>
    </Router>
  );
}

export default App;
