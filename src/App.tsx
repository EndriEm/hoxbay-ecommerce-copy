import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Categories } from "./pages/Categories";
import { Home } from "./pages/Home";
import { ProductItem } from "./pages/ProductItem";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route index element={<Navigate to='/home'/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/home/:itemId" element={<ProductItem />} />
      </Routes>
    </div>
  );
}

export default App;
