import Globe from "./img/globe.png";

function Header (){
    return (
        <section className="header">
            <img src={Globe} className="globe-img"/>
            <h3 className="header-text">Lurie's Travel Journal</h3>
        </section>
    )
}

export default Header