const currentDay = document.getElementsByClassName("current-day")
const currentDate = document.getElementsByClassName("current-date")
const location = document.getElementsByClassName("location")


let myHTTP = new XMLHttpRequest();

myHTTP.open(
  "GET",
  "https://api.weatherapi.com/v1/forecast.json?key=9723fb60a3f040d2be3113120241901&q=London&days=3"
);

myHTTP.send();

// console.log(myHTTP.readyState);
myHTTP.addEventListener("readystatechange", () => {
  if (myHTTP.readyState == 4 && myHTTP.status == 200) {
    let data = JSON.parse(myHTTP.response);
    display(data);
    console.log(JSON.parse(myHTTP.response));
  }
});

function display(list) {
  let cartona = ``;
  for (let i = 0; i < list.length; i++) {
    cartona += ``;
  }
  document.querySelectorAll("#table").innerHTML = cartona;
};
