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
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
const allDataUrl = "https://midaiganes.irw.ee/api/list/?limit=500";
const works = new DataList([]);
const props = getProperties();
setProperties(props);
console.log(props);

export default function DataModule() {
  const [result, setResult] = useState<ResultProps[]>([]);
  const [stats, setStats] = useState();
  const [isActive, setActive] = useState(false);
  const [tr, setTr] = useState("");
  const [sortIcon, setSortIcon] = useState({ dir: faSort, col: "default" });
  console.log("akiivn ", isActive);

  useEffect(() => {
    const api = async () => {
      const data = await fetch(allDataUrl, {
        method: "GET",
      });
      const jsonData = await data.json();
      setResult(
        works.dataWorks(
          jsonData.list
          //setSortToggleNameAndSort(jsonData.list, "default", sortIcon.dir)
        )
      );
      setStats(jsonData.stats);
      console.log("stats veel", stats);
      setProperties({total: jsonData.stats.results});
    };

    api();
  }, []);
  const toggleClass = (trId: string) => {
    setActive(!isActive);
    setTr(trId);
  };

  const toggleSort = (col: string) => {
    const newSort = { dir: sortIcon.dir, col: col };
    if (sortIcon.dir === faSort) newSort.dir = faSortAsc;
    if (sortIcon.dir === faSortAsc) newSort.dir = faSortDesc;
    if (sortIcon.dir === faSortDesc) newSort.dir = faSort;

    setSortIcon(newSort);
  };
  return (
    <div className="table-wrapper">
    <table>
      <thead key="headings">
        <tr key="result">
          <th id="firstname" role="button">
            Eesnimi <FontAwesomeIcon icon={faSort} />
          </th>
          <th
            id="surname"
            key="surname"
            role="button"
            onClick={() => {
              toggleSort("surname");
              setResult(
                setSortToggleNameAndSort(result, "surname", sortIcon.dir.iconName)
              );
            }}
          >
            Perekonnanimi
            <FontAwesomeIcon
              icon={sortIcon.col === "surname" ? sortIcon.dir : faSort}
            />
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
                  className="btn btn-light btn-xxl"
                  onClick={navigate("esimene", 0, 0, props.limit)}
                >
                  1
                </button>
                <button
                  className="btn btn-dark btn-xxl button__transparent"
                  onClick={navigate("eelmine", props.pageIndex)}
                  aria-label="Navigate to previous page"
                  //className="disabled"
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                {props.offsets.map((o:any) => {
                  return nupula(o) === 1 ? 
                  
                    <button
                      id={o.pageIndex}
                      className={"nav-item btn btn-xxl " + nupulaKlass(o)}
                      onClick={navigate("praegune", o.pageIndex, o.value, o.next)}
                    >
                      {o.page}
                    </button> : <></>
                  
                }
                )
 }
                <button
                  className="btn btn-dark btn-xxl button__transparent"
                  onClick={navigate("järgmine", getProperties().pageIndex)}
                  aria-label="Navigate to next page"
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button
                  className="btn btn-light btn-xxl"
                  onClick={navigate("viimane", getProperties().lastPageIndex)}
                >
                  {props.pageTotal}
                </button>
              </>
            </div>
          </td>
        </tr>
      </tfoot>

      <tbody key="rows">
        {result.slice(props.start, props.next).map((value) => {
          return (
            <>
              <tr
                role="button"
                id={value.id}
                key={value.id}
                onClick={() => toggleClass(value.id)}
                className={isActive && tr === value.id ? styles.active : ""}
              >
                <td>{value.firstname}</td>
                <td>{value.surname}</td>
                <td>{value.sex}</td>
                <td>{value.birthdate}</td>
                <td>{value.phone}</td>
              </tr>
              <tr
                id={value.id + "_intro"}
                key={value.id + "_intro"}
                className={
                  isActive && tr + "_intro" === value.id + "_intro"
                    ? ""
                    : styles.hidden
                }
              >
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
    </div>
  );
}
