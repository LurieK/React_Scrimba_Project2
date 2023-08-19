import mapPin from "./img/location-pin.png";
import dummImg from "./img/Mt-figi.png"


function Card(props){
    
    return (
        <section className="card">
            <div className="local-img-container">
            <img src={props.item.image}  className="local-img"/>
            </div>
            <div className="content">
                <div className="top">
                    <p className="location-name"><img src={mapPin}/>{props.item.Country}</p> 
                    <p><a href={props.item.GoogleMapLink} className="google-link">{props.item.GoogleMapLink}</a></p>
                </div>
                <h1>{props.item.Location}</h1>
                <p className="dates">{props.item.Dates}</p>
                <p>{props.item.about}</p>
            </div>

        </section>

    )


}

export default Card