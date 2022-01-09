import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeObj } from "./slices/example";
import { TStore } from "./store/store";
import logo from "./logo.svg";
import "./App.css";

export function App() {
  const dispatch = useDispatch();
  const { obj } = useSelector((state: TStore) => state.exampleReducer);
  const handleObjChange = () => {
    let newObj = {
      name: "Nutan",
      surname: "Singh",
    };
    dispatch(changeObj({ obj: newObj }));
  };

  return (
    <div className="App">
      <button onClick={handleObjChange}>Change Name</button>
      <h2>
        Name Object: {obj.name} &nbsp;
        {obj.surname}
      </h2>
    </div>
  );
}

// export default App;
