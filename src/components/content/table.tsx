import React, { Component } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
//import "../../mainData";
//import getData from "../../globals";
import DataModule from "./data.module";

class Table extends Component {
  render() {
    return <DataModule />;
  }
}

export default Table;
