import mapPin from "./img/location-pin.png";


function Card(props){
    console.log(props)
    return (
        <section className="card">
            <img src={props.place.image}className="local-img" />
            
            <div className="content">
                <div className="top">
                    <p className="location-name"><img src={mapPin}/>{props.place.Country}</p> 
                    <p className="google-link">{props.place.GoogleMapLink}</p>
                </div>
                <h1>{props.place.Location}</h1>
                <p className="dates">{props.place.Dates}</p>
                <p>{props.place.about}</p>
            </div>

        </section>

    )


}

export default Card