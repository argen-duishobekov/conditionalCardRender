import { Card } from "./components/Card";
import "./App.css";
import pic from'./a.png'
export const App = () => {
  const data = [
    {
      title: "Physical Health",
      color: "#22356F",
    },
    {
      title: "Running &Spinning",
      color: "#0052C1",
    },
    {
      title: "Physical ",
      color: null,
      img: pic
    },
    {
      title: "Argen Health",
      color: "#62D0DF",
    },
    {
      title: "Kutman Health",
      color: "#DEE1FF",
    },
    {
      title: "Angela Health",
      color: "#8F00FF",
    },
  ];
  return (
    <div className="App">
   {
    data.map((el,id)=> {
      return <Card data = {el} key={id}/>
    })
   }
    </div>
  );
};
