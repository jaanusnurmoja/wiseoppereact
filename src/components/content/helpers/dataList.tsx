import { Component } from "react";

export default class DataList extends Component {
  dataWorks = (data: any[]) => {
    for (let d of data) {
      let synna = personalIdToSortableAndFormattedDate(d.personal_code);
      d.personal_code = synna.sortable;
      d.birthdate = synna.formatted;
    }
    return data;
  };
}
function personalIdToSortableAndFormattedDate(personalId: any): any {
  let synna: any = {};
  let idAsString = String(personalId);
  let sajandiArv = ["5", "6"].includes(idAsString[0]) ? "20" : "19";
  let aasta = sajandiArv + idAsString.substring(1, 3);
  //sortSynna = Number(aasta + idAsString.substring(3));
  synna.sortable = Number(aasta + idAsString.substring(3));
  let kuu = idAsString.substring(3, 5);
  let paev = idAsString.substring(5, 7);
  synna.formatted = paev + "." + kuu + "." + aasta;
  return synna;
}

/* function sortCompare(prop1, prop2, asc, desc): number {
    if (asc == true) {
      return prop1 < prop2 ? -1 : 1;
    }
    if (desc == true) {
      return prop2 < prop1 ? -1 : 1;
    }
    return 0;
  }

function nupula(offset): boolean {
    if (pageIndex < 5) {
      return offset.value >= 0 && offset.value < 10 * limit;
    } else if (pageIndex >= pageTotal - 5) {
      return (
        offset.value >= (pageTotal - 10) * limit &&
        offset.value < total
      );
    } else {
      return (
        offset.value >= start - 5 * limit &&
        offset.value < start + 5 * limit
      );
    }
  }

  nupulaKlass(offset) {
    return offset.pageIndex == pageIndex.toString() ||
      (!pageIndex && offset.pageIndex == '0')
      ? {
          'text-warning': true,
          'fw-bold': true,
          'fs-4': true,
          'text-light': false,
        }
      : {
          'btn-warning': false,
          'fw-bold': false,
          'fs-4': false,
          'text-light': true,
        };
  } */
