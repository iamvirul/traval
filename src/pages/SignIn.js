import Footer from "../components/Footer";
import NavbarCom from "../components/Nav";
import "../css/SignIncss.css";

export default function SignIn() {
  return (
    <div>
      <NavbarCom />
      <div className=" form-control">
        <img
          className="loginimage"
          src="https://www.magicalisleholidays.com/image/pages/sri-lanka-destinations/sri-lanka-yala/05.jpg"
          alt="loginimg"
        />
        <div className="logingform">
          <span className="tracking-out-contract">Sign In</span>
          <div className="input-container">
            <input placeholder="Email" type="text" required />
            <input placeholder="Password" type="password" required />
            <p className="forgotpassword">forgot password</p>
          </div>
          <div className="button-container">
            <button>Log In</button>
            <button className="signup">Sign Up</button>
          </div>
          <div className="lable-container">
        <label>All right reserved | TripVila 2023<sup>&copy;</sup></label>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
