import { motion } from "framer-motion"

export default function ServBox(props) {
    return (
        <motion.div className="servbox">
            <div className="innerDiv">
                <div className="servIcon">
                    <img src={props.image} alt="" />
                </div>
                <h4>{props.title}</h4>
            </div>
        </motion.div>
    )
}