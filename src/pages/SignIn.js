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
        try {
          var jsonData = JSON.parse(response);
          // Check if jsonData is a valid JSON object
          if (typeof jsonData === 'object' && jsonData !== null) {
            localStorage.setItem("user", response);
            window.location = "./service"
        localStorage.setItem("user", response);
          } else {
            alert(response);
          }
        } catch (error) {
          alert(response);
        }
      },
      error: function (error) {
        alert(error);
      },
    });
  }

  //! signUp function to save user in database

  function signUp() {
    var signUpEmail = document.getElementById("signUpEmail").value;
    var signUpName = document.getElementById("signUpName").value;
    var signUpPassword = document.getElementById("signUpPassword").value;
    var signUpNormalPassword = document.getElementById(
      "signUpNormalPassword"
    ).value;

    //! emali validation function start

    function validateEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }

    //! email validation function end !

    if (signUpName === "") {
      alert("Type Your Name First...");
    } else if (signUpEmail === "") {
      alert("Type Your Email...");
    } else if (!validateEmail(signUpEmail)) {
      alert("Invalid email...");
    } else if (signUpNormalPassword === "") {
      alert("Type Your Password...");
    } else if (
      signUpNormalPassword.length < 8 ||
      signUpNormalPassword.length > 20
    ) {
      alert("Password must be between 8 to 20 characters");
    } else if (signUpPassword === "") {
      alert("Conform Your Password...");
    } else if (signUpNormalPassword !== signUpPassword) {
      alert(
        "Your Conform Password doesn't match to your password please check again..."
      );
    } else {
      var form = new FormData();
      form.append("name", signUpName);
      form.append("email", signUpEmail);
      form.append("password", signUpPassword);

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
          if (xhttp.responseText === "done") {
            var signup = document.getElementById("SignUpform");
            signup.style.display = "none";
            var signIn = document.getElementById("logingform");
            signIn.style.display = "flex";
          } else {
            alert(xhttp.responseText);
          }
        }
      };
      xhttp.open("POST", "http://localhost/tripVill/signUp.php", true);
      xhttp.send(form);
    }
  }

  //! UI designe

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
            <input placeholder="Name" id="signUpName" type="text" required />
            <input placeholder="Email" id="signUpEmail" type="text" required />
            <input
              placeholder="Password"
              type="password"
              id="signUpNormalPassword"
              required
            />
            <input
              placeholder="Conform Password"
              id="signUpPassword"
              type="password"
              required
            />
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
            <button className="signup" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
