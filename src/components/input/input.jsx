import styles from "./styles.module.scss";

export function Input(props) {
  return (
    <div
      className={`
      ${styles.inputDiv}
      ${props.states ? styles[props.states] : ""}
      ${props.error ? styles.errorLabel : ""}
      `}
    >
      <label className={styles.label} for="name">
        Label
      </label>

      <input
        className={`
        ${styles.input}
        ${props.states ? styles[props.states] : ""}
        ${props.error ? styles.error : ""}
        `}
        type="text"
        id="name"
        name="name"
        required
        placeholder="Placeholder"
        disabled={props.disabled ? "disabled" : ""}
      ></input>
      {props.helperText ? (
        <p className={styles.helperText}>{props.helperText}</p>
      ) : (
        ""
      )}
    </div>
    // <button
    //   className={`
    //   ${styles.button}
    //   ${styles[props.variant]}
    //   ${styles[props.states]}
    //   ${props.disableShadow ? styles.disableShadow : undefined}
    //   ${styles[props.size]}
    //   ${styles[props.color]}`}
    //   disabled={props.disabled ? "disabled" : ""}
    // >
    //   {props.startIcon ? (
    //     <span className={`material-icons ${styles.materialIcons}`}>
    //       {props.startIcon}
    //     </span>
    //   ) : undefined}
    //   {props.children ? props.children : "Default"}
    //   {props.endIcon ? (
    //     <span className={`material-icons ${styles.materialIcons}`}>
    //       {props.endIcon}
    //     </span>
    //   ) : undefined}
    // </button>
  );
}
