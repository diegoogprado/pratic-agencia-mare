import { motion } from "framer-motion"

export default function CallToAction() {
    return (
        <motion.div
            initial={{ opacity: 0 , y: 100 }}
            whileInView={{ opacity: 1 , y: 0}}
            transition={{ duration: 1.5}}
            id="cta" 
            className="callToAction">
            <div className="ctaText">
                <h4>Transforme como as pessoas
                se relacionam com a sua marca.</h4>
            </div>
            <form action="">
                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="Deixe seu melhor e-mail" />
                <button>Enviar agora</button>
            </form>
        </motion.div>
    )
}