import Card from "./components/Card";
import image from "/trees.png";

const cardData = {
  title: "Lorem ipsum",
  date: "07.07.2024",
  image,
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
};

function App() {
  return (
    <div className="grid grid-cols-3">
      <Card data={cardData}>
        <Card.Image />
        <Card.TitleAndDate />
        <Card.Description />
        <Card.Button />
      </Card>
    </div>
  );
}

export default App;
