/* const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
let neighbor = 0;
let data2 = 0;
const asim = function (countryside) {
  const request = new XMLHttpRequest();
  request.open("GET", https://restcountries.com/v3.1/name/${countryside});
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText)[0];
    console.log(data);
    /* 
    const entries = Object.entries(data.languages);

    for (const [a, b] of entries) {
      console.log(b);
    } */
/* 
    let languages1 = Object.values(data.languages);
    console.log(languages1);
    let thelanguage = languages1[0];
    console.log(thelanguage);

    let currencies = Object.values(data.currencies);

    let insidecurrencies = Object.values(currencies[0]);
    let thecurrency = insidecurrencies[0]; 

    let thelanguage = data.languages ? Object.values(data.languages)[0] : "N/A";
    let thecurrency = data.currencies
      ? Object.values(data.currencies)[0].name
      : "N/A";
    neighbor = data.borders[0];
    console.log(neighbor);
    const daniel = function (neighbor) {
      const request2 = new XMLHttpRequest();

      request2.open("GET", https://restcountries.com/v3.1/name/${neighbor});
      request2.send();

      request2.addEventListener("load", function () {
        data2 = JSON.parse(this.responseText)[0];
        console.log(data2);
      });
    };

    console.log(data2);
    daniel(neighbor);
    const html = `
        <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.official}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population}</p>
            <p class="country__row"><span>🗣</span>${thelanguage}</p>
            <p class="country__row"><span>💰</span>${thecurrency}</p>
          </div>
        </article>
        `;
    countriesContainer.insertAdjacentHTML("beforeend", html);
  });
};

asim("pakistan"); */

/* const btn = document.querySelector(".btn-country"); */
let btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const rendercountry = function (data) {
  console.log(data);
  console.log("asim");
  let thelanguage = data.languages ? Object.values(data.languages)[0] : "N/A";
  let thecurrency = data.currencies
    ? Object.values(data.currencies)[0].name
    : "N/A";
  const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${data.population}</p>
      <p class="country__row"><span>🗣</span>${thelanguage}</p>
      <p class="country__row"><span>💰</span>${thecurrency}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
};
/*
let neighbor = 0;
let data2 = "";
const asim = function (countryside) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryside}`);
  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText)[0];
    console.log(data);
    rendercountry(data);

    neighbor = data.borders[0];
    console.log(neighbor);
    const daniel = function (neighbor) {
      const request2 = new XMLHttpRequest();

      request2.open("GET", `https://restcountries.com/v3.1/name/${neighbor}`);
      request2.send();

      request2.addEventListener("load", function () {
        data2 = JSON.parse(this.responseText)[0];
        rendercountry(data2);
        console.log(data2);
      });
    };

    daniel(neighbor);
  });
};
asim("pakistan");
 */

let countryinput = document.querySelector("#input1");

let showncountry;
const showacountrynow = function () {
  showncountry = countryinput.value;
  console.log(showncountry);
};
btn.addEventListener("click", showacountrynow);
const errorfunction = function (err) {
  countriesContainer.insertAdjacentText("beforeend", err);
};
const fetchtest = function (test) {
  fetch(`https://restcountries.com/v3.1/name/${test}`)
    .then((asim5) => {
      if (!asim5.ok) {
        throw new Error(`country not found ${asim5.status}`);
      }
      return asim5.json(); // Return the parsed JSON data
    })
    .then((data5) => {
      console.log(data5);
      rendercountry(data5[0]);

      const neighbour = data5[0].borders[0];
      console.log(data5);
      console.log(neighbour);
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
        .then((asim6) => {
          if (!asim6.ok) {
            throw new Error(`There is no neighbour ${asim6.status}`);
          }
          return asim6.json();
        })
        .then((asim6Data) => {
          console.log(asim6Data);
          rendercountry(asim6Data[0]);
        });
    })
    .catch((err) => errorfunction(`Error fetching country: ${err}`));
};

btn.addEventListener("click", () => {
  console.log("test");
  showacountrynow();

  fetchtest(showncountry);
});
