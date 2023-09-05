import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  useEffect(() => {
    if (currentPage === "/") {
      navigate("/AboutMe");
    }
  }, [currentPage, navigate]);
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex mx-auto max-w-screen-xl mb-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// About Me, Portfolio, Contact, and Resume,
