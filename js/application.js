var modal = document.getElementById('myModal');


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
}


span.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var weather = new XMLHttpRequest();
weather.open("GET", "http://api.wunderground.com/api/df3f2ab5e1db8f97/conditions/q/karnataka/bangalore.json", false);
weather.send(null);
var r = JSON.parse(weather.response);
console.log(r);
document.getElementById("city").innerHTML = r.current_observation.observation_location.city;
document.getElementById("temperature").innerHTML = r.current_observation.feelslike_c;
document.getElementById("time").innerHTML = r.current_observation.local_time_rfc822;