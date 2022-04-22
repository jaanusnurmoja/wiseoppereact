import React, { useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
import DataSource from "./data";

const allItems = DataSource().getAllItems();

function dataList(dataList?:any[]) {
  return dataList;
}
console.log("table", dataList());

class Table extends React.Component<{}> {
  render() {
    return "Siia tuleb tabel";
  }
}

export default Table;
