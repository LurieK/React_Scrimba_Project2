import "./styles.css";
import Card from "./Card"
import Header from "./Header"
import data from "./data/data"

export default function App() {

  const cardElement = data.map((place)=>{
    return <Card 
        key={data.key}
        item={place}
    />
  })

  return (
    <div>
      <Header/>
      {cardElement}
    </div>
  );
}
