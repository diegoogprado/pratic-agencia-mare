import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

export default function App() {
  return(
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <CallToAction />
      <Footer/>
    </div>
  )
}