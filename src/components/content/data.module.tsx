import { useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
import parse from "html-react-parser";
import DataList from "./helpers/dataList.helper";
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
          <th id="firstname">Eesnimi</th>
          <th id="surname">Perekonnanimi</th>
          <th id="sex">Sugu</th>
          <th id="birthdate">Sündinud</th>
          <th id="phone">Telefon</th>
        </tr>
      </thead>
      <tbody>
        {result.map((value) => {
          return (
            <tr>
              <td>{value.firstname}</td>
              <td>{value.surname}</td>
              <td>{value.sex === "m" ? "mees" : "naine"}</td>
              <td>{value.birthdate}</td>
              <td>{value.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
