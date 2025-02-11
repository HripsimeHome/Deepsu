import Header from "../global/Header/Header";
import Footer from "../global/Footer/Footer";
import AppRouter from "./../../router/AppRouter";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { scrollTop } from "../../utils/scrollTop";

function App() {
  const location = useLocation();

  useEffect(() => {
    scrollTop();
  }, [location]);

  return (
    <> 
      <Header />
      <div className="container">      
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;