import React, { lazy } from "react";
import style from "./content.module.css";
import { RouterOutlet } from "react-router-outlet";
import Home from "../home";
import Table from "./table";
import Article from "./article";
const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/table",
    component: Table,
  },
  {
    path: "/article",
    component: Article,
  },
  {
    path: "/article/:id",
    component: Article,
    id: ":id",
  },
];

export default function Content() {
  return (
    <div id="maincontent" className="page">
      <div className={style.inline}>
        <RouterOutlet routes={routes} />
      </div>
    </div>
  );
}
