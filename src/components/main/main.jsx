import { Input } from "../input/input";
import styles from "./styles.module.scss";

export function Main() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Inputs</h1>
      <div className={styles.inputBox}>
        <div>
          <p>&lt;Input /&gt;</p>
          <Input />
        </div>
        <div>
          <p className={styles.states}>&amp;:hover</p>
          <Input states="hoverActive" />
        </div>
        <div>
          <p className={styles.states}>&amp;:focus</p>
          <Input states="focusActive" />
        </div>
      </div>

      <div className={styles.inputBox}>
        <div>
          <p>&lt;Input error /&gt;</p>
          <Input error />
        </div>
        <div>
          <p className={styles.states}>&amp;:hover</p>
          <Input error states="errorHoverActive" />
        </div>
        <div>
          <p className={styles.states}>&amp;:focus</p>
          <Input error states="errorFocusActive" />
        </div>
      </div>

      <div className={styles.inputBox}>
        <div>
          <p>&lt;Input disabled /&gt;</p>
          <Input disabled />
        </div>
      </div>
    </main>
  );
}
