import { Main } from "../main/main";
import { Nav } from "../nav/nav";
import styles from "./styles.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
