import * as React from "react";
import styles from "./menu.module.css";
import Logo from "../../assets/imgs/nurmoja_net_ee.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faHome, faTable } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";


export default class Menu extends React.Component<{}> {
  render() {
    return (
      <Router>
      <menu className="menu-visible">
        <img src={Logo} className={styles.logo} />
        <ul>
          <li>
            <Link to="/">
              Wiseproov <FontAwesomeIcon icon={faHome} />
            </Link>
          </li>
          <li>
            <Link to="/table">
              Tabel <FontAwesomeIcon icon={faTable} />
            </Link>
          </li>
          <li>
            <Link to="/article">
              Artikkel <FontAwesomeIcon icon={faFile} />
            </Link>
          </li>
        </ul>
      </menu>
      </Router>
    );
  }
}
