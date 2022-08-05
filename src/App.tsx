import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Basket } from "./pages/Basket";
import { Categories } from "./pages/Categories";
import { Electronics } from "./pages/Electronics";
import { Home } from "./pages/Home";
import { Jewelery } from "./pages/Jewelery";
import { Men } from "./pages/Men";
import { ProductItem } from "./pages/ProductItem";
import { Women } from "./pages/Women";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/product/:itemId" element={<ProductItem />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/categories/electronics" element={<Electronics />} />
        <Route path="/categories/jewelery" element={<Jewelery />} />
        <Route path="/categories/men" element={<Men />} />
        <Route path="/categories/women" element={<Women />} />
      </Routes>
    </div>
  );
}

export default App;
