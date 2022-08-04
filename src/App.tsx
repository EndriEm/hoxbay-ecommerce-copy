import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="*" element={<h1>Page not found</h1>} />
        <Route index element={<Navigate to='/home'/>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
