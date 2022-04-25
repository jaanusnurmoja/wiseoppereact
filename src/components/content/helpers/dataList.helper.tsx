import { Component } from "react";
import {
  faSort,
  faSortAsc,
  faSortDesc,
} from "@fortawesome/free-solid-svg-icons";
import { formatPhoneNumberIntl } from "react-phone-number-input";

export default class DataList extends Component {
  dataWorks = (data: any[]) => {
    //let gotData = data || globalList;
    for (let d of data) {
      d.firstname = d.firstname.replace("\u200e", "");
      d.surname = d.surname.replace("\u200e", "");
      d.sex = d.sex === "m" ? "mees" : "f" ? "naine" : "";
      let synna = personalIdToSortableAndFormattedDate(d.personal_code);
      d.sortBd = synna.sortable;
      d.birthdate = synna.formatted;
      d.phone = formatPhoneNumberIntl(d.phone);
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
/*
function setSortToggleNameAndSort(
  data: any,
  sortableField: any,
  sortIcon?: any
) {
  let loend = data;
  let sortNames: any = {};
  let sortedData: any[] = [];
  let asc: boolean = false;
  let desc: boolean = false;
  let none: boolean = false;
  let sn: any = faSort;
  if (!sortIcon) {
    sn = faSort;
  }
  if (sortIcon === faSort) {
    sn = faSortAsc;
    asc = true;
  }
  if (sortIcon === faSortAsc) {
    sn = faSortDesc;
    desc = true;
  }
  if (sortIcon === faSortDesc) {
    sn = faSort;
    none = true;
  }

  if (sortableField == "default") sortNames.default = "sort";
  if (sortableField == "birthdate") sortableField = "sortBd";
  console.log(sortableField);

  if (sortableField.length > 0 && sortableField != "default") {
    sortNames[sortableField] = sn;
    sortedData = loend.sort((a: any, b: any) =>
      sortCompare(a[sortableField], b[sortableField], asc, desc)
    );
  }

  /*   if (sortableField == "" || sortableField == "default") {
    sortNames.default = "sort";
    sortNames.firstname = "sort";
    sortNames.surname = "sort";
    sortNames.sex = "sort";
    sortNames.sortSynna = "sort";
  }

  sortToggleName = sortNames;

 */
/*
  if (none) {
    loend = reset();
  } else {
    loend = sortedData;
  }
  setSliceInimesed(loend, start, next);
}
*/
function sortCompare(
  prop1: any,
  prop2: any,
  asc: boolean,
  desc: boolean
): number {
  if (asc === true) {
    return prop1 - prop2;
  }
  if (desc === true) {
    return prop2 - prop1;
  }
  return 0;
}
/* 

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
function setSliceInimesed(inimesed: any, start?: number, next?: number) {
  if (typeof start === "undefined") start = 0;
  if (typeof next === "undefined") next = 10;
  return inimesed.slice(start, next);
}
