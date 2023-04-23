import "../components/ServiceDes.css";
import ServiceTripdata from "./ServiceTripdata";

export default function ServiceDes() {
// eslint-disable-next-line
    function loadservice(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState === 4 && xhttp.status === 200){
                // alert(xhttp.responseText);
            }
        }
        xhttp.open("GET","http://localhost/tripVill/loadServices.php",true);
        xhttp.send();
    }

    // setInterval(loadservice,200)

  return (
    <div className="trip-card-service">
      <ServiceTripdata
        img={
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/2d/1d/0f/img-20161230-041500-366.jpg?w=700&h=-1&s=1"
        }
        heading={"Nuwara Eliya"}
        text={
          "Nuwara Eliya is a city in the tea country hills of central Sri Lanka. The naturally landscaped Hakgala Botanical Gardens displays roses and tree ferns, and shelters monkeys and blue magpies. Nearby Seetha Amman Temple, a colorful Hindu shrine, is decorated with religious figures. Densely forested Galway's Land National Park is a sanctuary for endemic and migratory bird species, including bulbuls and flycatchers.Nuwara Eliya, called Little England"
        }
      />
      <ServiceTripdata
        img={
          "https://www.srilankatravelandtourism.com/places-sri-lanka/yapahuwa/yapahuwa-images/yapahuwa-1-sri-lanka.jpg"
        }
        heading={"Yapahuwa"}
        text={
          "Strong, dry breezes ruffle the quiet serenity of the temperate country side. Wild grass thrust through pleasantly undulating ground while a lone lizard revels in brilliant sunshine, poised on one of many ancient stone ruins. Overhead looms the Yapahuwa rock, 300-foot isolated fortified wonder with a history dating back to the 13th Century. In that era, Yapahuwa was Sri Lanka’s home to the Sacred Tooth Relic of the  Buddha."
        }
        link={
          "https://www.google.com/maps?q=yapahuwa&rlz=1C5CHFA_enLK1008LK1008&um=1&ie=UTF-8&sa=X&ved=2ahUKEwjwjKav-JD-AhUL7jgGHXV-C7UQ_AUoAnoECAEQBA"
        }
      />
      <ServiceTripdata
        img={
          "https://www.ceylonexpeditions.com/medias/destination_places/big/110/sri-pada-adam-s-peak-sri-lanka.jpg"
        }
        heading={"Sri Pada / Adam's Peak"}
        text={
          "Though not the highest mountain of Sri Lanka, the striking pyramid of Adam's Peak (7,360 ft) is certainly the most remarkable. A depression in the rocky summit resembles a huge footprint, which has been venerated as a sacred sigh from remote antiquity. This was identified by Buddhists as the Buddha's footprint, by Hindus as that of Shiva, and by Muslims as Adam's. Later the Portuguese attributed it to St. Thomas the Apostle."
        }
        link={
          "https://www.google.com/maps/place/Sri+Pada+%2F+Adam's+Peak/@6.809643,80.4643693,13z/data=!4m15!1m8!3m7!1s0x3ae380434e1554c7:0x291608404c937d9c!2sNuwara+Eliya!3b1!8m2!3d6.9497166!4d80.7891068!16zL20vMDJoZzcw!3m5!1s0x3ae3977589234b59:0x8723ad471d5b37dc!8m2!3d6.809643!4d80.4993882!16zL20vMDVncGM1"
        }
      />
      <ServiceTripdata
        img={
          "https://s3.amazonaws.com/bizenglish/wp-content/uploads/2020/09/16154747/dreammusic1.jpg"
                }
        heading={"Nelum Pokuna Mahinda Rajapaksa Theatre"}
        text={
          "The Nelum Pokuna Theatre (Sinhala: නෙළුම් පොකුණ මහින්ද රාජපක්ෂ රඟහල, nelum pokuna rangahala; often known as Nelum Pokuna; previously the National Performing Arts Theatre, prior to naming at the opening ceremony after which the President Mahinda Rajapaksa named it after himself)[4] is a performing arts centre in Colombo, Sri Lanka. The theatre opened on 15 December 2011."
                }
        link={
          "https://www.google.com/maps/place/Sri+Pada+%2F+Adam's+Peak/@6.809643,80.4643693,13z/data=!4m15!1m8!3m7!1s0x3ae380434e1554c7:0x291608404c937d9c!2sNuwara+Eliya!3b1!8m2!3d6.9497166!4d80.7891068!16zL20vMDJoZzcw!3m5!1s0x3ae3977589234b59:0x8723ad471d5b37dc!8m2!3d6.809643!4d80.4993882!16zL20vMDVncGM1"
        }
      />
    </div>
  );
}
