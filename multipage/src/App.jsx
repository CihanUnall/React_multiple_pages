import { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
function App() {
  const [page, setPage] = useState(window.location.pathname.slice(1) || "home");

  // Sayfa değiştirme fonksiyonu
  const navigate = (newPage) => {
    window.history.pushState({}, "", `/${newPage}`);
    setPage(newPage);
  };

  // Tarayıcı geri/ileri butonu dinleyicisi
  useEffect(() => {
    const onPopState = () =>
      setPage(window.location.pathname.slice(1) || "home");
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header />
      <div style={{ display: "flex", flex: 1 }}>
        <Sidebar navigate={navigate} />
        <main style={{ flex: 1, padding: "20px" }}>
          {page === "home" && <Home />}
          {page === "about" && <About />}
          {page === "contact" && <Contact />}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
