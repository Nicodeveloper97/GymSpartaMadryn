import './App.css';
import Hero from "./components/Hero/Hero"
import Programs from "./components/Programas/Programs"
import Reasons from "./components/Razones/reasons"
import Planes from "./components/planes/plans"
import Join from "./components/Unete/Join"
import Footer from "./components/footer/footer"
function App() {
  return (
    <div className="App">
          <Hero/>
          <Programs/>
          <Reasons/>
          <Planes/>
          <Join/>
          <Footer/>
    </div>
  );
}

export default App;
