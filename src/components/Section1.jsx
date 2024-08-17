import initImg from "../../public/assets/initImg.png"
export default function Section1() {
    return (
        <section id="initSection" className="initialSection">
            <div className="initText">
                <h2>Experiências memoráveis</h2>
                <p>Surpreenda seus clientes com sites e campanhas incríveis que atingem o
                    público certo no momento certo da jornada de compra. Acompanhe a Maré!</p>
                <div className="initButtons">
                    <button id="toWorks">Ver trabalhos</button>
                    <button id="contactUs">Entrar em contato</button>
                </div>
            </div>
            <div className="initImg">
                <img src={initImg} alt="" />
            </div>
        </section>
    )
}