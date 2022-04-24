/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
import parse from "html-react-parser";

//ax.get("https://midaiganes.irw.ee/api/list/66db6ed7");
// vt https://codesandbox.io/s/0z1ex?file=/src/App.tsx
if (globalThis.__INITIAL_DATA__) {
  const stats = globalThis.__INITIAL_DATA__.stats;
  const list = globalThis.__INITIAL_DATA__.list;
  console.log("article", stats.total);

  for (let entry of list) {
    if (entry.id === "66db6ed7") {
      console.log("article", entry);
    }
  }
}

export default function Article() {
  const [result, setResult] = useState<ResultProps>();
  useEffect(() => {
    if (!result) {
      const api = async () => {
        const data = await fetch(
          "https://midaiganes.irw.ee/api/list/66db6ed7",
          {
            method: "GET",
          }
        );
        const jsonData = await data.json();
        setResult(jsonData);
      };

      api();
    }
  });

  return (
    <div className={styles.inline}>
      <h1>{result?.title}</h1>
      <h2>{result?.author}</h2>
      <div className={styles.intro}>
        {typeof result?.intro === "string"
          ? parse(result.intro)
          : result?.intro}
      </div>
      <img src={result?.image.small} alt={result?.image.alt} />
      <div>
        {typeof result?.body === "string" ? parse(result.body) : result?.body}
      </div>
    </div>
  );
}
