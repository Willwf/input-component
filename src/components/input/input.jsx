import { useState } from "react";
import styles from "./styles.module.scss";

export function Input(props) {
  function inputWithIcon(props) {
    if (props.startIcon) {
      return (
        <div className={styles.inputWithRightIconDiv}>
          <span className={`material-icons ${styles.materialIcons}`}>
            {props.startIcon}
          </span>
          <input
            className={`
        ${styles.inputWithIcon}
        ${props.states ? styles[props.states] : ""}
        ${props.error ? styles.error : ""}
        ${props.size ? styles[props.size] : ""}
        `}
            disabled={props.disabled ? "disabled" : ""}
            type="text"
            id="name"
            name="name"
            required
            placeholder="Placeholder"
            defaultValue={props.value ? props.value : ""}
          />
        </div>
      );
    }

    if (props.endIcon) {
      return (
        <div className={styles.inputWithLeftIconDiv}>
          <input
            className={`
        ${styles.inputWithIcon}
        ${props.states ? styles[props.states] : ""}
        ${props.error ? styles.error : ""}
        ${props.size ? styles[props.size] : ""}
        `}
            disabled={props.disabled ? "disabled" : ""}
            type="text"
            id="name"
            name="name"
            required
            placeholder="Placeholder"
            defaultValue={props.value ? props.value : ""}
          />
          <span className={`material-icons ${styles.materialIcons}`}>
            {props.endIcon}
          </span>
        </div>
      );
    }

    return (
      <input
        className={`
        ${styles.input}
        ${props.states ? styles[props.states] : ""}
        ${props.error ? styles.error : ""}
        ${props.size ? styles[props.size] : ""}
        `}
        disabled={props.disabled ? "disabled" : ""}
        type="text"
        id="name"
        name="name"
        required
        placeholder="Placeholder"
        defaultValue={props.value ? props.value : ""}
      />
    );
  }

  return (
    <div
      className={`
      ${styles.inputDiv}
      ${props.states ? styles[props.states] : ""}
      ${props.error ? styles.errorLabel : ""}
      `}
    >
      <label className={styles.label} htmlFor="name">
        Label
      </label>

      {inputWithIcon(props)}

      {props.helperText ? (
        <p className={styles.helperText}>{props.helperText}</p>
      ) : (
        ""
      )}
    </div>

    //<button
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
