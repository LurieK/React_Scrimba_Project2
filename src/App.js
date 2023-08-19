import "./styles.css";
import Card from "./Card"
import Header from "./Header"
import data from "./data/data"

export default function App() {
  let cardElements = data.map((place)=>
    <Card 
      key={place.key}
      item={place}
    />
  )
  
 

  return (
    <div>
      <Header/>
      <div className="card-element">
      {cardElements}
      </div>
    </div>
  );
}
