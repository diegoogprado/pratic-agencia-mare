export default function ServBox(props) {
    return (
        <div className="servbox">
            <div className="innerDiv">
                <div className="servIcon">
                    <img src={props.image} alt="" />
                </div>
                <h4>{props.title}</h4>
            </div>
        </div>
    )
}