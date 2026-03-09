import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className="bg-camo text-green-100 min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}