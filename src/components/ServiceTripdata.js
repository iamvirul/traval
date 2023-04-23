import "../components/TripStyle.css";
import { AnimationOnScroll } from "react-animation-on-scroll";

function ServiceTripdata(props) {
  return (
    <AnimationOnScroll className="t-card" animateIn="animate__bounceIn">
      <div>
        <div className="t-image">
          <img src={props.img} alt="t-img" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
      </div>
      
    </AnimationOnScroll>
  );
}

export default ServiceTripdata;
