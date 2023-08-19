import mapPin from "./img/location-pin.png";



function Card(props){
    
    return (
        <section className="card">
            <div className="local-img-container">
            <img src={props.item.image}  className="local-img"/>
            </div>
            <div className="content">
                <div className="top">
                    <p className="location-name"><img src={mapPin}/>{props.item.Country}</p> 
                    <p><a target="_blank" href={props.item.GoogleMapLink} className="google-link">View on Google Maps</a></p>
                </div>
                <h1>{props.item.Location}</h1>
                <p className="dates">{props.item.Dates}</p>
                <div className="stay-message">
                {props.item.longStay ? <p>Visited Over a Month!</p> : <p>Short Visit</p>}
                </div>
                <p>{props.item.about}</p>
            </div>

        </section>

    )


}

export default Card