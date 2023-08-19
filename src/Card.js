import mapPin from "./img/location-pin.png";
import dummImg from "./img/Mt-figi.png"


function Card(props){
    console.log(props)
    return (
        <section className="card">
            <img src={props.item.image} className="local-img" />
            
            <div className="content">
                <div className="top">
                    <p className="location-name"><img src={mapPin}/>{props.item.Country}</p> 
                    <p className="google-link">{props.item.GoogleMapLink}</p>
                </div>
                <h1>{props.item.Location}</h1>
                <p className="dates">{props.item.Dates}</p>
                <p>{props.item.about}</p>
            </div>

        </section>

    )


}

export default Card