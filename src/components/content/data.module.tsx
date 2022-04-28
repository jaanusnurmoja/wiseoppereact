import { useState, useEffect } from "react";
import styles from "./content.module.css";
import { ResultProps } from "./resultProps";
import parse from "html-react-parser";
import DataList, {
  setProperties,
  getProperties,
  personalIdToSortableAndFormattedDate,
  setSortToggleNameAndSort,
  getSliceInimesed,
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
const props = getProperties();
setProperties(props);
console.log(props);
export default function DataModule() {
  const [result, setResult] = useState<ResultProps[]>([]);
  useEffect(() => {
    const api = async () => {
      const data = await fetch(allDataUrl, {
        method: "GET",
      });
      const jsonData = await data.json();
      console.log(faSort.iconName);
      setResult(works.dataWorks(setSortToggleNameAndSort(jsonData.list, "default", faSortAsc.iconName)));
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
      <tfoot>
        <tr>
          <td colSpan={5} className="buttonWrapper">
            <div
              role="group"
              className="btn-transparent btn-xxl nav nav-fill"
              aria-label="Navigate"
              style={{ width: "100%" }}
            >
              <>
              <button
                role="button"
                className="btn btn-light btn-xxl"
                //onClick={navigate("esimene", 0, 0, getProperties().limit)}
              >
                1
              </button>
              <button
                 role="button"
                 className="btn btn-dark btn-xxl button__transparent"
                //onClick={navigate("eelmine", getProperties().pageIndex)}
                aria-label="Navigate to previous page"
                //className="disabled"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
                {
/*                  props.offsets.map((o) => (nupula(o), 1),
                  (
                    <button
                      id={o.pageIndex}
                      className={"nav-item btn btn-xxl " + nupulaKlass(o)}
                      onClick={navigate("praegune", o.pageIndex, o.value, o.next)}
                    >
                      {o.page}
                    </button>
                  )
                )
 */                 }
                <button
                className="btn btn-dark btn-xxl button__transparent"
                role="button"
                //onClick={navigate("järgmine", getProperties().pageIndex)}
                aria-label="Navigate to next page"
                >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <button
                  role="button"
                  className="btn btn-light btn-xxl"
                //onClick={navigate("viimane", getProperties().lastPageIndex)}
              >
                {props.pageTotal}
              </button>
              </>
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
