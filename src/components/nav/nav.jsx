import styles from "./styles.module.scss";

export function Nav() {
  return (
    <nav className={styles.navbar}>
      <p className={styles.title}>
        <span className={styles.span}>Dev</span>challenges.io
      </p>
      <ul className={styles.ul}>
        <li>Typography</li>
        <li>Grid</li>
        <li>Buttons</li>
        <li className={styles.active}>Inputs</li>
      </ul>
    </nav>
  );
}
