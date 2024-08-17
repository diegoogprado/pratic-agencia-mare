import { motion } from "framer-motion"

export default function Carousel(props) {
    return (
        
            <motion.div className="imgDiv">
                <img src={props.image} alt="" />
            </motion.div>

    )
}