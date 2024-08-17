import Carousel from "./Carousel";

export default function Section3() {
    const carousels = [
        "/assets/OT1.png",
        "/assets/OT2.png",
        "/assets/OT3.png",
        "/assets/OT4.png",
        "/assets/OT5.png",
        "/assets/OT6.png"
    ]
    return (
        <section id="recWork" className="recentWorks">
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
            <div className="workContent">
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
            <div className="otherWorks">
                <div className="recText">
                    <h4>Outros trabalhos</h4>
                </div>
                <div className="carousel">
                {carousels.map((carouselImg) => (
                    <Carousel 
                        key={carousels.indexOf(carouselImg)}
                        image={carouselImg}
                    />        
                ))}
                </div>
            </div>

        </section>
    )
}