import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  useEffect(() => {
    if (currentPage === "/") {
      navigate("/AboutMe");
    }
  }, [currentPage, navigate]);
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;

// About Me, Portfolio, Contact, and Resume,
