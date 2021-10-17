var dates = document.getElementsByClassName("card-info__date");
var startDate = dates[0].innerText;
var endDate = dates[1].innerText;
var times = document.getElementsByClassName("time");
var firstDepTime = times[0].innerText;
var firstArrTime = times[1].innerText;
var secondDepTime = times[2].innerText;
var secondArrTime = times[3].innerText;
var flights = document.getElementsByClassName("card-info__col");
var firstFN = flights[2].getElementsByTagName("div");
var firstFNString = firstFN[1].innerText;
var secondFN = flights[6].getElementsByTagName("div");
var secondFNString = secondFN[1].innerText;
console.log("Departure date - " + startDate);
console.log("Arrival date - " + endDate);
console.log("Hour and place for takeoff (departure) - " + firstDepTime);
console.log("Hour and place for landing (departure) - " + firstArrTime);
console.log("Hour and place for takeoff (arrival) - " + secondDepTime);
console.log("Hour and place for landing (arrival) - " + secondArrTime);
console.log("Flight number (departure) - " + firstFNString);
console.log("Flight number (arrival) - " + secondFNString);
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.capturedata.com/");
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    "startDate": startDate,
    "endDate": endDate,
    "firstDepTime": firstDepTime,
    "firstArrTime": firstArrTime,
    "secondDepTime": secondDepTime,
    "secondArrTime": secondArrTime,
    "firstFN": firstFN,
    "secondFN": secondFN
}));