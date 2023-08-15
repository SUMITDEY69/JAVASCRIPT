// async function sumit() {
//   return 5;
// }

// sumit().then((x) => {
//   console.log(x);
// });

async function weatherReport() {
  // -----------------------------------------------------------------------//
  let kokrajharWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("25 deg");
    }, 1000);
  });

  console.log("Fetching weather report of Kokrajhar ...");
  let weatherReportKokrajhar = await kokrajharWeather;
  console.log("Fetched, weather report is :" + weatherReportKokrajhar);
  // -----------------------------------------------------------------------//
  let bongaigaonWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("29 deg");
    }, 2000);
  });
  console.log("Fetching weather report of Bongaogaon ...");
  let weatherReportBongaigaon = await bongaigaonWeather;
  console.log("Fetched, weather report is :" + weatherReportBongaigaon);
  // -----------------------------------------------------------------------//
  return [weatherReportKokrajhar, weatherReportBongaigaon];
}
// -----------------------------------------------------------------------//

// let report = weatherReport();
// console.log(report);
// let word = "YO, I am here";
// console.log(word);

// -----------------------------------------------------------------------//

let wordTest = () => {
  console.log("YO, I am here");
};

// -----------------------------------------------------------------------//

let start = async () => {
  let report = await weatherReport();
  let word = await wordTest();
};
start();
