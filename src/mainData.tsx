import "./globals.d";
export default function mainData(): any {
  var data: any;
  const baseUrl = "https://midaiganes.irw.ee/api/list/";
  function query() {
    // create a new XMLHttpRequest
    let xhr = new XMLHttpRequest();

    // get a callback when the server responds
    xhr.addEventListener("load", () => {
      // update the state of the component with the result here
      // console.log(xhr.responseText);
      globalThis.__INITIAL_DATA__ = JSON.parse(xhr.responseText);
    });
    // open the request with the verb and the url
    xhr.open("GET", baseUrl + "?limit=500");
    // send the request
    xhr.send();
  }
  query();
  console.log("main", data);
  return data;
}
console.log(globalThis.__INITIAL_DATA__);
