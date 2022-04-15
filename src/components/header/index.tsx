import * as React from "react";
import styles from "./header.module.css";
import Logo from "../../assets/imgs/nurmoja_net_ee.png";
export default class Header extends React.Component<{}> {
  render() {
    return (
      <header className={styles.header}>
        <button aria-label="Toggle menu" className="clickable" />
        <img src={Logo} className={styles.logo} />
      </header>
    );
  }
}
