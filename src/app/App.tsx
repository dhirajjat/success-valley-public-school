import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div
      className=" bg-gradient-to-br from-slate-50 to-blue-50"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      {/* Glassmorphism Header */}
      <Navbar />

      {/* Hero Section - Split Screen */}
      <Hero />

      {/* About Us - The Story */}
      <AboutUs />

      {/* Programs - The Curriculum */}
      <Programs />

      {/* Gallery - Bento Box Style */}
      <Gallery />

      {/* Contact Section - Interactive */}
      <Contact />

      {/* Footer - Dark Mode */}
      <Footer />
    </div>
  );
}
