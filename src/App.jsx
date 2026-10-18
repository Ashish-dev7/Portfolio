import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import ScrollZoomReveal from "./components/ScrollZoomReveal/ScrollZoomReveal";
import About from "./components/About/About";
import Projects from "./components/Project/Project";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import MatrixCursorTrail from "./components/MatrixCursorTrail";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white flex flex-col">
      <MatrixCursorTrail color="#22c55e" headColor="#bbf7d0" />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#090d1f",
            color: "#fff",
            border: "1px solid rgba(255, 255, 255, 0.15)",
          },
        }}
      />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ScrollZoomReveal/>
        <About />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

