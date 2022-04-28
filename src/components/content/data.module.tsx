import { useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
import parse from "html-react-parser";
import DataList, {
  setProperties,
  getProperties,
  personalIdToSortableAndFormattedDate,
  setSortToggleNameAndSort,
  setSliceInimesed,
  sortCompare,
  navigate,
  nupula,
  nupulaKlass,
} from "./helpers/dataWorks.helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faSort,
  faSortAsc,
  faSortDesc,
} from "@fortawesome/free-solid-svg-icons";
const allDataUrl = "https://midaiganes.irw.ee/api/list/?limit=500";
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
      <thead key="headings">
        <tr key="result">
          <th id="firstname" role="button">
            Eesnimi <FontAwesomeIcon icon={faSort} />
          </th>
          <th id="surname" role="button">
            Perekonnanimi <FontAwesomeIcon icon={faSort} />
          </th>
          <th id="sex" role="button">
            Sugu <FontAwesomeIcon icon={faSort} />
          </th>
          <th id="birthdate" role="button">
            Sündinud <FontAwesomeIcon icon={faSort} />
          </th>
          <th id="phone">Telefon</th>
        </tr>
      </thead>

      <tbody key="rows">
        {result.map((value) => {
          return (
            <>
              <tr
                role="button"
                id={value.id}
                key={value.id}
                className="clickable"
              >
                <td>{value.firstname}</td>
                <td>{value.surname}</td>
                <td>{value.sex}</td>
                <td>{value.birthdate}</td>
                <td>{value.phone}</td>
              </tr>
              <tr id={value.id + "_intro"} key={value.id + "_intro"}>
                <td colSpan={5}>
                  <div className={styles.tab}>
                    <div
                      className={styles.image}
                      style={{
                        backgroundImage: "url(" + value.image.small + ")",
                      }}
                    ></div>
                    <div className={styles.body}>
                      {parse(value.intro)}
                      <p style={{ display: "block" }}>
                        <a
                          role="button"
                          className="button__small"
                          href={"/article/" + value.id}
                        >
                          Loe edasi
                        </a>
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
  );
}
