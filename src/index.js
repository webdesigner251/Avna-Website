import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import About from "./pages/about";
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import OurProducts from "./pages/ourProducts";
import Contact from "./pages/contact";
import ProductView from "./pages/product-view";
import Blogs from "./pages/blogs";
import BlogView from "./pages/blog-view";
import ScrollToTop from './components/ScrollToTop';
import WelcomePopup from './components/welcomePopup'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter basename="/Avna-Website">
    <Header />
    <ScrollToTop />
      <WelcomePopup />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<OurProducts />}></Route>
      <Route path="/product-view" element={<ProductView />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/blogView" element={<BlogView />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter >
);
