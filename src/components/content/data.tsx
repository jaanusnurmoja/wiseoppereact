import dataList from "./table";
const baseUrl = "https://midaiganes.irw.ee/api/list/";
const itemsPerPage = 10;
const queryParams = { limit: 500 };
const exports: any = {};

exports.getAllItems = async (err?: any) => {
  const result = await fetch(baseUrl + "?limit=500").then((data) =>
    data.json()
  );
  if (!result) {
    return err;
  }
  console.log(result);
  new dataList(result.list);
};

export default function DataSource() {
  return exports;
}
