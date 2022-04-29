/* eslint-disable jsx-a11y/img-redundant-alt */
import { Component, useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
import parse from "html-react-parser";
import { useLocation, useParams } from "react-router-dom";
//ax.get("https://midaiganes.irw.ee/api/list/66db6ed7");
// vt https://codesandbox.io/s/0z1ex?file=/src/App.tsx
export default function Article() {
  const [result, setResult] = useState<ResultProps>();
  let id = window.location.pathname.substring(
    window.location.pathname.lastIndexOf("/") + 1
  );
  console.log(useParams(), id);
  useEffect(() => {
    if (!result) {
      const api = async () => {
        const data = await fetch(
          "https://midaiganes.irw.ee/api/list/?limit=500",
          {
            method: "GET",
          }
        );
        const jsonData = await data.json();
        let list = jsonData.list;
        let ids = list.map((item: any) => item.id);
        let random = ids[Math.floor(Math.random() * ids.length)];
        if (id === "article") id = random;
        for (let item of list) {
          if (item.id === id) {
            setResult(item);
          }
        }
      };

      api();
    }
  });
  return (
    <div>
      <h1>{result?.title}</h1>
      <h2>{result?.author}</h2>
      <div className={styles.intro}>
        {typeof result?.intro === "string"
          ? parse(result.intro)
          : result?.intro}
      </div>
      <img src={result?.image.medium} alt={result?.image.alt} />
      <div>
        {typeof result?.body === "string" ? parse(result.body) : result?.body}
      </div>
    </div>
  );
}
