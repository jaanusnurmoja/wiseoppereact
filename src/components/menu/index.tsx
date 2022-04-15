import * as React from "react";
import styles from "./menu.module.css";
import Logo from "../../assets/imgs/nurmoja_net_ee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faHome, faTable } from "@fortawesome/free-solid-svg-icons";


export default class Menu extends React.Component<{}> {
  render() {
    return (
      <menu className="menu-visible">
        <img src={Logo} className={styles.logo} />
        <ul>
          <li>
            <a href="/home">
              Wiseproov <FontAwesomeIcon icon={faHome} />
            </a>
          </li>
          <li>
            <a href="/table">
              Tabel <FontAwesomeIcon icon={faTable} />
            </a>
          </li>
          <li>
            <a href="/article">
              Artikkel <FontAwesomeIcon icon={faFile} />
            </a>
          </li>
        </ul>
      </menu>
    );
  }
}
