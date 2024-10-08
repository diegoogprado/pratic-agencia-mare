import Carousel from "./Carousel";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Section3() {
    const carousels = [
        "/assets/OT1.png",
        "/assets/OT2.png",
        "/assets/OT3.png",
        "/assets/OT4.png",
        "/assets/OT5.png",
        "/assets/OT6.png"
    ]
    const carousel = useRef()
    const [ width , setWidth ] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    })
    return (
        <motion.div 
            initial={{ opacity: 0 , y: 100 }}
            whileInView={{ opacity: 1 , y: 0}}
            transition={{ duration: 1.5}} 
            id="recWork" 
            className="recentWorks">
            <div className="recText">
                <h4>Trabalhos recentes</h4>
                <p>Resultados relevantes de alguns de nossos clientes.</p>
            </div>
            <div className="workContent">
                <div className="contentImg">
                    <img src="/assets/leftImg.png" alt="" />
                </div>
                <div className="contentText">
                    <h4>Seja achado independente do seu endereço.</h4>
                    <p>Descubra como a Morley Butchers aumentou muito as visitas
                        à loja física e como a Agência Maré foi determinante para isso.</p>
                    <div className="distacNLogo">
                        <p>200% a mais de visitas na loja física</p>
                        <span className="borderLogo"><img src="/assets/logo morley.png" alt="" /></span>
                    </div>
                </div>
            </div>
            <div className="workContent reverse">
                <div className="contentText">
                    <h4>Como a Adobe aumentou em 5x a conversão do seu site.</h4>
                    <p>Descubra como a Adobe aumentou em 5x a conversão do seu site.
                    Nosso time da Agência Maré planejou toda campanha de marketing digital no Google Ads.</p>
                    <div className="distacNLogo">
                        <p>5x mais conversões no site.</p>
                        <span className="borderLogo"><img src="/assets/logoAdobe.png" alt="" /></span>
                    </div>
                </div>
                <div className="contentImg">
                    <img src="/assets/rightImg.png" alt="" />
                </div>
            </div>
            <div className="otherWorksBg">
                <div className="recText">
                    <h4>Outros trabalhos</h4>
                </div>
                <div className="otherWorksContent">
                    <motion.div ref={carousel}className="carousel" whileTap={{cursor: "grabbing"}}>
                        <motion.div className="carouselDiv"
                        drag="x"
                        dragConstraints={{ right: 0, left: -width}}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        >
                            {carousels.map((carouselImg) => (
                                <Carousel 
                                    key={carousels.indexOf(carouselImg)}
                                    image={carouselImg}
                                />        
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>

        </motion.div>
    )
}