import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import Donate from "./pages/Donate.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doar" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
