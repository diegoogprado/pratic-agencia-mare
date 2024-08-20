import initImg from "/assets/initImg.png"
import { motion } from "framer-motion"
export default function Section1() {
    return (
        <motion.div 
            initial={{ opacity: 0 , y: 100 }}
            whileInView={{ opacity: 1 , y: 0}}
            transition={{ duration: 1.5}} 
            id="initSection" 
            className="initialSection">
            <div className="initText">
                <h2>Experiências memoráveis</h2>
                <p>Surpreenda seus clientes com sites e campanhas incríveis que atingem o
                    público certo no momento certo da jornada de compra. Acompanhe a Maré!</p>
                <div className="initButtons">
                    <button id="toWorks"><a href="#recWork">Ver trabalhos</a></button>
                    <button id="contactUs"><a href="#cta">Entrar em contato</a></button>
                </div>
            </div>
            <div className="initImg">
                <img src={initImg} alt="" />
            </div>
        </motion.div>
    )
}