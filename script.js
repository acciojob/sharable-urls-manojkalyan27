// Select elements
const nam = document.querySelector("#name");
const year = document.querySelector("#year");
const btn = document.querySelector("#button");
const url = document.querySelector("#url");


btn.addEventListener("click", (event) => {

  event.preventDefault();

  const nameValue = nam.value;
  const yearValue = year.value;

  if (nameValue.length > 0 && yearValue.length > 0) {
    // console.log(`Name: ${nameValue}, Year: ${yearValue}`);
    url.innerHTML = `https://localhost:8080/?name=${nameValue}&year=${yearValue}`;
  } else if (nameValue.length > 0) {
    // console.log(`Name: ${nameValue}, Year: ${yearValue}`);
    url.innerHTML = `https://localhost:8080/?name=${nameValue}`;
  } else if (yearValue.length > 0) {
    // console.log(`Name: ${nameValue}, Year: ${yearValue}`);
    url.innerHTML = `https://localhost:8080/?year=${yearValue}`;
  }
});
