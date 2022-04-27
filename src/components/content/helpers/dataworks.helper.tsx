import { Component } from "react";
import {
  faSort,
  faSortAsc,
  faSortDesc,
} from "@fortawesome/free-solid-svg-icons";
import { formatPhoneNumberIntl } from "react-phone-number-input";
const pageIndex = 0;
const pageTotal = 0;
const start = 0;
const next = 10;
const limit = 10;
const total = 500;
const offsets = [{}];
const props: any = {};
//const data = localStorage.getItem('inimesed');

export function setProperties(newProps: any) {
  props.pageIndex = pageIndex;
  props.pageTotal = pageTotal;
  props.limit = limit;
  props.start = start;
  props.next = start + limit;
  props.total = total;
  props.offsets = offsets;
  props.currentOffset = {};

  for (let prop in newProps) {
    props[prop] = newProps[prop];
  }
}
export function getProperties() {
  return props;
}
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
export function personalIdToSortableAndFormattedDate(personalId: any): any {
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

export function setSortToggleNameAndSort(
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

  if (sortableField === "default") sortNames.default = "sort";
  if (sortableField === "birthdate") sortableField = "sortBd";
  console.log(sortableField);

  if (sortableField.length > 0 && sortableField !== "default") {
    sortNames[sortableField] = sn;
    sortedData = loend.sort((a: any, b: any) =>
      sortCompare(a[sortableField], b[sortableField], asc, desc)
    );
  }

  if (none) {
    loend = DataList;
  } else {
    loend = sortedData;
  }
  setSliceInimesed(loend, start, next);
}

export function sortCompare(
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

export function setCurrentOffset(offset: any) {
  props.currentOffset = offset;
}

export function nupula(offset?: any) {
  if (!offset) offset = props.currentOffset;
  if (props.pageIndex < 5) {
    return offset.value >= 0 && offset.value < 10 * limit ? 1 : 0;
  } else if (props.pageIndex >= props.pageTotal - 5) {
    return offset.value >= (props.pageTotal - 10) * limit &&
      offset.value < total
      ? 1
      : 0;
  } else {
    return offset.value >= props.start - 5 * limit &&
      offset.value < props.start + 5 * limit
      ? 1
      : 0;
  }
}

export function nupulaKlass(offset: any) {
  return offset.pageIndex === pageIndex.toString() ||
    (!pageIndex && offset.pageIndex === "0")
    ? {
        "text-warning": true,
        "fw-bold": true,
        "fs-4": true,
        "text-light": false,
      }
    : {
        "btn-warning": false,
        "fw-bold": false,
        "fs-4": false,
        "text-light": true,
      };
}

export function navigate(
  target: string,
  pgIndex?: any,
  newStart?: any,
  newNext?: any
) {
  if (target === "eelmine" || target === "järgmine" || target === "viimane") {
    if (target === "eelmine") {
      pgIndex =
        props.pageIndex - 1 < 0
          ? props.pageTotal + (props.pageIndex - 1)
          : props.pageIndex - 1;
    }
    if (target === "järgmine") {
      pgIndex =
        props.pageIndex + 1 >= props.pageTotal
          ? props.pageIndex + 1 - props.pageTotal
          : props.pageIndex + 1;
    }
    newStart = props.offsets[pageIndex].value;
    newNext = props.offsets[pageIndex].next;
  }
  props.pageIndex = pgIndex;
  props.start = newStart;
  props.next = newNext;
  let inimesteLoend = localStorage.getItem('inimesed');
  console.log(inimesteLoend);
  return setSliceInimesed(inimesteLoend, props.start, props.next);
}

export function setSliceInimesed(inimesed: any, start?: number, next?: number) {
  if (typeof start === "undefined") start = 0;
  if (typeof next === "undefined") next = 10;
  return inimesed.slice(start, next);
}
