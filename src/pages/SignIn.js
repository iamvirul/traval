import Footer from "../components/Footer";
import NavbarCom from "../components/Nav";
import "../css/SignIncss.css";
import $ from "jquery";
export default function SignIn() {
    
  //! signIn function to connect into php backend using AJAX

  function signIn() {
    var email = document.getElementById("signInemail").value;
    var password = document.getElementById("signInPassword").value;
    var form = new FormData();
    form.append("email", email);
    form.append("password", password);

    $.ajax({
      url: "http://localhost/tripVill/user.php",
      method: "POST",
      data: form,
      contentType: false,
      processData: false,
      success: function (response) {
        alert(response);
      },
      error: function (error) {
        alert(error);
      },
    });
  }
  return (
    <div>
      <NavbarCom />
      <div className=" form-control">
        <img
          className="loginimage"
          src="https://www.magicalisleholidays.com/image/pages/sri-lanka-destinations/sri-lanka-yala/05.jpg"
          alt="loginimg"
        />
        <div className="logingform" id="logingform">
          <span className="tracking-out-contract">Sign In</span>
          <div className="input-container">
            <input placeholder="Email" id="signInemail" type="text" required />
            <input
              placeholder="Password"
              id="signInPassword"
              type="password"
              required
            />
            <p className="forgotpassword">forgot password</p>
          </div>
          <div className="button-container">
            <button onClick={signIn}>Log In</button>
            <button
              className="signup"
              onClick={() => {
                var signup = document.getElementById("SignUpform");
                signup.style.display = "block";
                var signIn = document.getElementById("logingform");
                signIn.style.display = "none";
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
        <div className="SignUpform" id="SignUpform">
          <span className="tracking-out-contract">Sign Up</span>
          <div className="signUp-input-container">
            <input placeholder="Name" type="text" required />
            <input placeholder="Email" type="password" required />
            <input placeholder="Password" type="password" required />
            <input placeholder="Conform Password" type="password" required />
          </div>
          <div className="button-container">
            <button
              className="login"
              onClick={() => {
                var signup = document.getElementById("SignUpform");
                signup.style.display = "none";
                var signIn = document.getElementById("logingform");

                signIn.style.display = "flex";
              }}
            >
              Log In
            </button>
            <button className="signup">Sign Up</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
