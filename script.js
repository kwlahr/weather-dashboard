window.onload = function() {
//   var data = $(queryURL).data(data);
// var country = document.getElementById("countryName", "text");
// var search = document.getElementById("search");
// var search = $("search").on("click")
var city = "denver";
var country = "us";
  // var city = $("#cityName").val();
  // var country = $("#countryName").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=e118a9757bbd90e8cbd8a9d2eff8445f";
  var today = new Date();

  var simpleDate = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
  // console.log(queryURL);
  
  $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
    // console.log(response);
    // console.log(response.name);
    // console.log(response.weather[0].icon);
    // console.log(response.main.temp);
    // console.log(response.main.humidity);
    // console.log(response.wind.speed);
    $("#search").on("click", function(){
      console.log(response);
      var farenheit = (response.main.temp - 273.15) * 9/5 + 32;
      $(".city").append("City: " + response.name);
      $(".date").append("Today: " + simpleDate);
      $(".temp").append("Current temperature: " + Math.round(farenheit) + " &#xb0;F");
      $(".humidity").append("Current humidity: " + response.main.humidity);
      $(".windSpeed").append("Current wind speed: " + response.wind.speed);
    });
  });
  


};