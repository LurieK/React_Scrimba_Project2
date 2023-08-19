import mapPin from "./img/location-pin.png";
import testImg from "./img/Mt-figi.png"

function Card(){
    return (
        <section className="card">
            <img src={testImg}className="local-img" />
            
            <div className="content">
                <div className="top">
                    <p className="location-name"><img src={mapPin}/>LOCATION</p> 
                    <p className="google-link">Google Link</p>
                </div>
                <h1>Title for Location</h1>
                <p className="dates">Dates Visited</p>
                <p>2-3 sentances about the place. Some thougts and stuff like that</p>
            </div>

        </section>

    )


}

export default Card