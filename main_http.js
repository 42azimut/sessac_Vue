// http request
const url = "https://api.covid19api.com/country/south-korea/status/confirmed?from=2021-09-01T00:00:00Z&to=2021-11-01T00:00:00Z";
const corona = fetch(url).then(res => res.json())
  .then(data => console.log(data))
