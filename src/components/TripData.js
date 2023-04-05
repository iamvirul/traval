import "../components/TripStyle.css";

function TripData (props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img src={props.img} alt="t-img"/>
            </div>
            <h4>{props.heading}</h4>
            <p>{props.text}</p>
            <a href={props.link}>Go to Location</a>
        </div>
    )
}

export default TripData;