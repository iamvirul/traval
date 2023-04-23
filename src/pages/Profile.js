import Footer from "../components/Footer";
import NavbarCom from "../components/Nav";
import "../css/Profilecss.css";
export default function Profile() {
  return (
    <>
   <NavbarCom/>
    <div className="container">
      <div className="profileContainer">
        <div className="imgContainer">

        </div>
        <div>
          <label for="fileToUpload">
            <span className="selectbtn">Select Image</span>
            <input type="file" id="fileToUpload" name="fileToUpload" hidden />
          </label>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
