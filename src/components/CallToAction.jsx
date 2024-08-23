import { motion } from "framer-motion"
import { useState } from "react"

export default function CallToAction() {

    const [ email, setEmail ] = useState('')

    function sendEmail(e){
        e.preventDefault()
        alert("email enviado "+ email)
        setEmail('')
        return
    }

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
            <form onSubmit={sendEmail}>
                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="Deixe seu melhor e-mail" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <button>Enviar agora</button>
            </form>
        </motion.div>
    )
}