export default function CallToAction() {
    return (
        <section id="cta" className="callToAction">
            <div className="ctaText">
                <h4>Transforme como as pessoas
                se relacionam com a sua marca.</h4>
            </div>
            <form action="">
                <label htmlFor="email"></label>
                <input type="email" name="email" placeholder="Deixe seu melhor e-mail" />
                <button>Enviar agora</button>
            </form>
        </section>
    )
}