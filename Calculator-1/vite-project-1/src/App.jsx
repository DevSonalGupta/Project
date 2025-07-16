import styles from "./App.module.css";
import Display from "./componets/Display";
import Buttonscontainer from "./componets/Buttoncsontainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <Buttonscontainer></Buttonscontainer>
    </div>
  );
}

export default App;
