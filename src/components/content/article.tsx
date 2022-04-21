import React, { useState, useEffect } from "react";
import styles from "./content.module.css";
import { useQuery } from "react-query";
type resultProps = {
  id: string;
  title: string;
  email: string;
  firstname: string;
  surname: string;
  author: string;
  sex: string;
  personal_code: number;
  phone: string;
  date: number;
  image: any;
  images: any[];
  intro: string;
  body: string;
  tags: string[];
  boolean: boolean;
};

//ax.get("https://midaiganes.irw.ee/api/list/66db6ed7");
// vt https://codesandbox.io/s/0z1ex?file=/src/App.tsx

export default function Article() {
  const [result, setResult] = useState<resultProps[]>([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("https://midaiganes.irw.ee/api/list/66db6ed7", {
        method: "GET",
      });
      const jsonData = await data.json();
      setResult(jsonData.results);
      console.log(jsonData);
    };

    api();
  }, []);

  return (
    <div className={styles.intro}>
      <h1>
        {result.map((value) => {
          return (
            <div>
              <div>{value.author}</div>
              <div>{value.title}</div>
            </div>
          );
        })}
      </h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

/* export default class Article extends React.Component<{}> {
  render() {
    return <AppArticle />;
  }
}
 */
