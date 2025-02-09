import Header from "../global/Header/Header";
import Footer from "../global/Footer/Footer";
import AppRouter from "./../../router/AppRouter";

function App() {
  return (
    <>
      <div className="container">
        <Header />    
       <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;