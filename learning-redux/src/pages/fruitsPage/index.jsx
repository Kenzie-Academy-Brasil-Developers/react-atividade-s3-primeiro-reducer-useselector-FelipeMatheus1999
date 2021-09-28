import "./style.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFruit } from "../../store/modules/fruits/actions";

const FruitsPage = () => {
  const [fruit, setFruit] = useState("");
  const dispatch = useDispatch();
  const fruits = useSelector((state) => state.fruits);

  const handleAddFruit = () => dispatch(addFruit(fruit));

  return (
    <div className={"container"}>
      <div>
        <input
          className={"input"}
          onChange={(event) => setFruit(event.target.value)}
        />
        <button className={"button"} onClick={handleAddFruit}>
          Adicionar
        </button>
      </div>

      {fruits.map((fruit) => (
        <p className={"fruit"} key={fruit}>
          {fruit}
        </p>
      ))}
    </div>
  );
};

export default FruitsPage;
