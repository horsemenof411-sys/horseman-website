import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import DigitalDesign from "./pages/DigitalDesign";
import WebsiteBuilding from "./pages/WebsiteBuilding";
import TravelPlans from "./pages/TravelPlans";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="photography" element={<Photography />} />
        <Route path="digital-design" element={<DigitalDesign />} />
        <Route path="website-building" element={<WebsiteBuilding />} />
        <Route path="travel-plans" element={<TravelPlans />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;