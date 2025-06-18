// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/produto/:id" element={<SingleProduct />} />
        {/* Adicione outras rotas se quiser */}
      </Routes>
    </Router>
  );
}
