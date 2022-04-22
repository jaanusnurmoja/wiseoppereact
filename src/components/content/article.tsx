/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";

//ax.get("https://midaiganes.irw.ee/api/list/66db6ed7");
// vt https://codesandbox.io/s/0z1ex?file=/src/App.tsx

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
  console.log(result);

  return (
    <div className={styles.intro}>
      <h1>{result?.title}</h1>
      <h2>{result?.author}</h2>
      <p>{result?.intro}</p>
      <img src={result?.image.small} alt={result?.image.alt} />
      <div>{result?.body}</div>
    </div>
  );
}
