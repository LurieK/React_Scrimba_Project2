import "./styles.css";
import Card from "./Card"
import Header from "./Header"
import data from "./data/data"

export default function App() {

  const cardElements = data.map((place)=>{
    return <Card 
        key={place.key}
        item={place}
    />
  })

  return (
    <div>
      <Header/>
      
    </div>
  );
}
