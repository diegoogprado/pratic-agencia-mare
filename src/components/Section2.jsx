import { useEffect, useRef, useState } from "react";
import ServBox from "./ServBox";
import { motion } from "framer-motion";

export default function Section2() {
    const services = [{
        image: "/icone design.png",
        title:"Web Design"
        }, {
            image: "/iconeMktDigital.png",
            title: "Marketing Digital"   
        }, {
            image: "/iconeSEO.png",
            title: "SEO"
        }, {
            image: "/iconeSM.png",
            title: "Social Media"
        }, {
            image: "/iconePlan.png",
            title: "Planejamento"
        }, {
            image: "/iconeAudioVisual.png",
            title: "AudioVisual"
        }
    ]

    const { innerWidth: width } = window

    const carousel = useRef()
    const [ widthC , setWidthC ] = useState(0)

    useEffect(() => {
        setWidthC(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    })

    return(
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5}}  
            id="servSection" 
            className="serviceSection">
            <div className="servTitle">
                <h2>O que fazemos</h2>
            </div>
            {innerWidth < 780
            ? (<motion.div ref={carousel} className="servBoxes" whileTap={{cursor: "grabbing"}}>
                    <motion.div className="servBoxesDiv"
                        drag="x"
                        dragConstraints={{ right: 0, left: -widthC}}
                        initial={{ x: 100 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.8 }}>
                        {services.map((service) => (
                            <ServBox 
                                key={services.indexOf(service)}
                                image={service.image}
                                title={service.title}
                            />        
                        ))}
                    </motion.div>
                </motion.div>
            ): (<div className="servBoxes">
                {services.map((service) => (
                    <ServBox 
                        key={services.indexOf(service)}
                        image={service.image}
                        title={service.title}
                    />        
                ))}</div>)}
            
            <div className="sec2Bg"></div>
        </motion.div>
    )
}