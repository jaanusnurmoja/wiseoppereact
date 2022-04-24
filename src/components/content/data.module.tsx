import { useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
import parse from "html-react-parser";
import DataList from "./helpers/dataList";
const allDataUrl = "https://midaiganes.irw.ee/api/list";
const works = new DataList([]);
export default function DataModule() {
  const [result, setResult] = useState<ResultProps[]>([]);
  useEffect(() => {
    const api = async () => {
      const data = await fetch(allDataUrl, {
        method: "GET",
      });
      const jsonData = await data.json();
      setResult(works.dataWorks(jsonData.list));
    };

    api();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th id="title">Title</th>
          <th id="author">Author</th>
        </tr>
      </thead>
      <tbody>
        {result.map((value) => {
          return (
            <tr>
              <td>{value.birthdate}</td>
              <td>{value.author}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
