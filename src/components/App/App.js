import { useLocation } from "react-router-dom";
import Header from "../global/Header/Header";
import HeaderMenu from "../global/HeaderMenu/HeaderMenu";
import Footer from "../global/Footer/Footer";
import AppRouter from "./../../router/AppRouter";
 
import { useEffect } from "react";
import { scrollTop } from "../../utils/scrollTop";
import { homePagePath, chatPagePath } from "../../router/path";
 
function App() {  
  const location = useLocation();
  const isHomePage = location.pathname === homePagePath;
  const isChatPage = location.pathname === chatPagePath;

  useEffect(() => {
    scrollTop();
  }, [location]);

  return (   
    <> 
       {isChatPage ? <HeaderMenu /> : <Header />}
      <div className="container">      
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;