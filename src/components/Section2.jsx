import ServBox from "./ServBox";

export default function Section2() {
    const services = [{
        image: "../icone design.png",
        title:"Web Design"
        }, {
            image: "../iconeMktDigital.png",
            title: "Marketing Digital"   
        }, {
            image: "../iconeSEO.png",
            title: "SEO"
        }, {
            image: "../iconeSM.png",
            title: "Social Media"
        }, {
            image: "../iconePlan.png",
            title: "Planejamento"
        }, {
            image: "../iconeAudioVisual.png",
            title: "AudioVisual"
        }
    ]

    return(
        <section id="servSection" className="serviceSection">
            <div className="servTitle">
                <h2>O que fazemos</h2>
            </div>
            <div className="servBoxes">
                {services.map((service) => (
                    <ServBox 
                        key={services.indexOf(service)}
                        image={service.image}
                        title={service.title}
                    />        
                ))}
                
            </div>
            <div className="sec2Bg"></div>
        </section>
    )
}