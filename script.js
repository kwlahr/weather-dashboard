window.onload = function() {
//   var data = $(queryURL).data(data);
  var city = document.getElementById("cityName", "text");
  var country = document.getElementById("countryName", "text");
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=e118a9757bbd90e8cbd8a9d2eff8445f";

  console.log(queryURL);
  
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    console.log(response);
    console.log(response.name);
    console.log(response.weather[0].icon);
    console.log(response.main.temp);
    console.log(response.main.humidity);
    console.log(response.wind.speed);
  });
};
