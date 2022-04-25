import { useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
import parse from "html-react-parser";
import DataList from "./helpers/dataList.helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faSortAsc,
  faSortDesc,
} from "@fortawesome/free-solid-svg-icons";
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
          <th id="firstname">
            Eesnimi <FontAwesomeIcon icon={faSort} />
          </th>
          <th id="surname">
            Perekonnanimi <FontAwesomeIcon icon={faSort} />
          </th>
          <th id="sex">
            Sugu <FontAwesomeIcon icon={faSort} />
          </th>
          <th id="birthdate">
            Sündinud <FontAwesomeIcon icon={faSort} />
          </th>
          <th id="phone">Telefon</th>
        </tr>
      </thead>
      <tbody>
        {result.map((value) => {
          return (
            <tr>
              <td>{value.firstname}</td>
              <td>{value.surname}</td>
              <td>{value.sex}</td>
              <td>{value.birthdate}</td>
              <td>{value.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
