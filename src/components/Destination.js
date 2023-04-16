import "../components/Destinationcss.css";
import { AnimationOnScroll } from "react-animation-on-scroll";
function Destination() {
  return (
    <div className="Destination">
      <AnimationOnScroll
        animateIn="animate__shakeY"
        animateOut="animate__bounceOutRight"
      >
        <span className="destini">Popular Destinations In Sri Lanka</span>
        <p className="tourspara">
          Tours Give you the opportunity to see a lot, within a time frame{" "}
        </p>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className=" first-des">
          <div className=" des-text">
            <h2>World's End Nuwara Eliya</h2>
            <p>
              One of the most jaw-dropping experience you can ever have in Sri
              Lanka is the World’s End on the Horton Plains. Enjoy a tuk-tuk
              ride to the Horton plains from Nuwara Eliya and it is among the
              best tourist places to visit in Sri Lanka
            </p>
          </div>
          <div className="image">
            <img
              className="tripimage"
              src="https://images.thrillophilia.com/image/upload/s--Srw9ozIc--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/069/789/original/3284990140_9d90923180_o.jpg.jpg"
              alt="trip"
            />
            <img
              className="tripimage2"
              src="https://edwardscollection.com/wp-content/uploads/2021/08/worlds-end-ne.jpg"
              alt="trip"
            />
          </div>
        </div>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInLeftBig">
        <div className=" second-des">
          <div className=" des-text2">
            <h2>Sacred City of Anuradhapura</h2>
            <p>
              This sacred city was established around a cutting from the 'tree
              of enlightenment', the Buddha's fig tree, brought there in the 3rd
              century B.C. by Sanghamitta, the founder of an order of Buddhist
              nuns. Anuradhapura, a Ceylonese political and religious capital
              that flourished for 1,300 years, was abandoned after an invasion
              in 993. Hidden away in dense jungle for many years, the splendid
              site, with its palaces, monasteries and monuments, is now
              accessible once again.
            </p>
          </div>
          <div className="image2">
            <img
              className="tripimage"
              src="https://whc.unesco.org/uploads/thumbs/site_0200_0001-750-750-20150608110546.jpg"
              alt="trip"
            />
            <img
              className="tripimage2"
              src="https://i0.wp.com/magnificentsrilanka.com/wp-content/uploads/2021/08/anuradapura-1.jpg?resize=960%2C720&ssl=1"
              alt="trip"
            />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default Destination;
