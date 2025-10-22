import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import JopsPage from "./pages/JopsPage";
import AddJops from "./pages/AddJops";
import NotFound from "./pages/NotFound";
import SingleJop from "./pages/SingleJop";
import EditeJop from "./pages/EditeJop";

const App = () => {
  // Add new Jop
  const addJopToJSONServerDB = async (newOpp) => {
    const res = await fetch("/api/jops", {
      method: "POST",
      headers: {
        "Content-Type": "applicaion/json",
      },
      body: JSON.stringify(newOpp),
    });
    return;
  };

  // DELETE
  const deleteJop = async (id) => {
    const res = await fetch(`/api/jops/${id}`, {
      method: "DELETE",
    });
  };

  // Edite

  const editJop = async (updatedJop) => {
    const res = await fetch(`/api/jops/${updatedJop.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedJop),
    });
    return;
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/jops" element={<JopsPage />} />
        <Route
          path="/add-jop"
          element={<AddJops addNewJop={addJopToJSONServerDB} />}
        />
        <Route
          path="/jops/:id"
          element={<SingleJop onDelete={deleteJop} onEdite={editJop} />}
        />
        <Route
          path="/jops/edit/:id"
          element={<EditeJop onDelete={deleteJop} onEdite={editJop} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
