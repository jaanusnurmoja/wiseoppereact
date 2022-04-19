import React, { lazy } from "react";
import "./content.module.css";
import { RouterOutlet } from "react-router-outlet";
import Home from "../home";
import Table from "./table";
import Article from "./article";
 const routes = [
    {
        path: '/',
        component: Home,
        exact: true,
    },
    {
        path: '/table',
        component: Table,
    },
    {
        path: '/article',
        component: Article,
        routes: [
            {
                path: '/:id',
                component: Article,
            }
        ]
    }
];

class Content extends React.Component<{}> {

render () {
    return (
        <div id="maincontent" className="page">
            <div className="inline">
                <RouterOutlet routes = {routes} />
            </div>
        </div>
    )
}
   
}


export default Content;