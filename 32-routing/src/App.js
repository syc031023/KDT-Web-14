import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./styles/App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage";

import Navbar from "./pages/Navbar";
import Student from "./components/Student";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setProducts(data.slice(0, 10));
  };

  const names = ["kdt", "codingon", "new"];

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route path="/products/:id" element={<ProductDetailPage />} />

          {/* 실습 */}
          <Route path="/" element={<Navbar/>} /> 
          <Route path="/student/:name" element={<Student names={names}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;