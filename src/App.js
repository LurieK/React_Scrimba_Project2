import "./styles.css";
import Card from "./Card.js"
import Header from "./Header"
import data from "./data/data.js"

export default function App() {
  let cardElement = data.map((place)=>{
    <Card 
        key={data.key}
        item={place}
    />
  })
  return (
    <div className="App">
      <Header/>
      {cardElement}
    </div>
  );
}
