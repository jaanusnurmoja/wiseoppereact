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
  setNupula,
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
import TruncateMarkup from "react-truncate-markup";
import LinesEllipsis from "react-lines-ellipsis";
import { stripHtml } from "string-strip-html";
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
      <thead key="headings">
        <tr key="result">
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
      <tfoot>
        <tr>
          <td colSpan={5} className="buttonWrapper">
            <div
              role="group"
              className="btn-transparent btn-xxl nav nav-fill"
              aria-label="Navigate"
              style={{ width: "100%" }}
            >
              <button
                className="btn btn-light btn-xxl"
                onClick={navigate("esimene", 0, 0, getProperties().limit)}
              >
                1
              </button>
              <button
                className="btn btn-dark btn-xxl"
                onClick={navigate("eelmine", getProperties().pageIndex)}
                aria-label="Navigate to previous page"
                className="disabled button__transparent"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              {getProperties().offsets}.map((o)
              {nupula(o)(
                <button
                  id={offset.pageIndex}
                  className="nav-item btn btn-xxl"
                  classNames={nupulaKlass(o)}
                  onClick={navigate("praegune", o.pageIndex, o.value, o.next)}
                >
                  {o.page}
                </button>
              )}
              <button
                className="btn btn-dark btn-xxl"
                onClick={navigate("järgmine", pageIndex)}
                aria-label="Navigate to next page"
                variant="transparent"
                class="button__transparent"
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <button
                className="btn btn-light btn-xxl"
                onClick={navigate("viimane", lastPageIndex)}
              >
                {pageTotal}
              </button>
            </div>
          </td>
        </tr>
      </tfoot>

      <tbody key="rows">
        {result.map((value) => {
          return (
            <>
              <tr
                role="button"
                id={value.id}
                key={value.id}
                className="clickable active"
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
