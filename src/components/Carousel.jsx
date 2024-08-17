export default function Carousel(props) {
    return (
        <div className="carouselDiv">
            <div className="imgDiv">
                <img src={props.image} alt="" />
            </div>
        </div>
    )
}