import { Component, useState } from "react";
import {
  faSort,
  faSortAsc,
  faSortDesc,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { formatPhoneNumberIntl } from "react-phone-number-input";
const pageIndex = 0;
const pageTotal = 50;
const start = 0;
const next = 10;
const limit = 10;
const total = 500;
const offsets = [{}];
const props: any = {};
//const data = localStorage.getItem('inimesed');

export function setProperties(newProps: any) {
  props.pageIndex = 0;
  props.pageTotal = Math.ceil(props.total/props.limit);
  props.limit = limit;
  props.start = 0;
  props.next = props.start + limit;
  props.total = total;
  props.currentOffset = {
    pageIndex: props.pageIndex,
    page: props.pageIndex + 1,
    value: props.start,
    next: props.next,
  };
  let offsets: {
    pageIndex: number;
    page: number;
    value: number;
    next: number;
  }[] = [];

  for (let i = 0; i < props.pageTotal; i++) {
    let osValue = i * limit;
    let next = osValue + limit;
    offsets[i] = { pageIndex: i, page: i + 1, value: osValue, next: next };
  }
  props.offsets = offsets;
  props.firstOffset = offsets[0];


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
  sortableField: string,
  sortIcon?: string
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
  if (sortIcon === "sort") {
    sn = "sort-up";
    asc = true;
  }
  if (sortIcon === "sort-up") {
    sn = "sort-down";
    desc = true;
  }
  if (sortIcon === "sort-down") {
    sn = "sort";
    none = true;
  }

  if (sortableField === "default") {
    //sortNames.default = "sort";
    none = true;
  }
  if (sortableField === "birthdate") sortableField = "sortBd";
  console.log(sortableField, sn);

  if (sortableField.length > 0 && sortableField !== "default") {
    sortNames[sortableField] = sn;
    sortedData = loend.sort((a: any, b: any) =>
      sortCompare(a[sortableField], b[sortableField], asc, desc)
    );
  }

  if (none) {
    loend = data;
  } else {
    loend = sortedData;
  }
  //return getSliceInimesed(loend, props.start, props.next);
  return loend;
}

export function sortCompare(
  prop1: any,
  prop2: any,
  asc: boolean,
  desc: boolean
): number {
  if (asc === true) {
    return prop1 < prop2 ? -1 : 1;
  }
  if (desc === true) {
    return prop1 > prop2 ? -1 : 1;
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
  newNext?: any,
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
  setProperties({
    pageIndex: pgIndex,
    start: newStart,
    next: newNext
  }
  );
//  console.log(inimesteLoend);
/*   if (!inimesteLoend) return;
  return getSliceInimesed(
    inimesteLoend,
    props.currentOffset.value,
    props.currentOffset.next
  );
 */
return props;
}

export function getSliceInimesed(inimesed: any, start?: number, next?: number) {
  if (typeof start === "undefined") start = 0;
  if (typeof next === "undefined") next = 10;
  return inimesed.slice(start, next);
}