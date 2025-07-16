import styles from "./App.module.css";
import Display from "./componets/Display";
import Buttonscontainer from "./componets/Buttoncsontainer";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Buttonscontainer onButtonClick={onButtonClick}></Buttonscontainer>
    </div>
  );
}

export default App;
