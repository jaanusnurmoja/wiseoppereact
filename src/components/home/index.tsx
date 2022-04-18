import * as React from "react";
import styles from "./home.module.css";

export default class Home extends React.Component<{}> {
  render() {
    return (
      <div className={styles.home}>
        <h1>Jaanus Nurmoja</h1>
        <h2>SPA proovitöö</h2>
        <h2>Saaja: Trinidad Wiseman</h2>
      </div>
    );
  }
}
