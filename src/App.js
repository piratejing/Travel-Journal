import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import cardData from "./data";

function App() {
  const cards = cardData.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Header />
      {cards}
    </div>
  );
}

export default App;
