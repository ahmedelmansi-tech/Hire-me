import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import JopsPage from "./pages/JopsPage";
import AddJops from "./pages/AddJops";
import NotFound from "./pages/NotFound";
import SingleJop from "./pages/SingleJop";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jops" element={<JopsPage />} />
        <Route path="/add-jop" element={<AddJops />} />
        <Route path="/jops/:id" element={<SingleJop />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
