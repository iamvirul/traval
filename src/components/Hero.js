import "../components/Herocss.css";

function Hero (props){
    return(
        <div className={props.cName}>
            <img className={props.imgCss} alt="heroimg" src={props.img}/>

            <div className="hero-text">
                <span className={props.h1Cname}>{props.title}</span>
                <p className={props.pCname}>{props.para}</p>
                <a className={props.aCname} href="/about">{props.about}</a>
            </div>
        </div>

    );
}

export default Hero;