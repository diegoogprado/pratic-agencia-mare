import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import { motion } from "framer-motion";

export default function App() {
  return(
    <motion.div className="App"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1  }}
    transition={{ duration: 1 }}
    >
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <CallToAction />
      <Footer/>
    </motion.div>
  )
}