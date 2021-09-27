import { useSelector } from "react-redux";
import "./style.css";

const FruitsPage = () => {
  const fruits = useSelector((state) => state.fruits);

  return (
    <div className={"fruitDiv"}>
      {fruits.map((fruit) => (
        <p className={"fruit"} props={fruit} key={fruit}> {fruit} </p>
      ))}
    </div>
  );
};

export default FruitsPage;
