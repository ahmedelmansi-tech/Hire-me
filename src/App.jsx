import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JopListings from "./components/JopListings";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <HomeCards />
      <JopListings />
    </BrowserRouter>
  );
};

export default App;
