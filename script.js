//STILL NEED:
//  -functional city, country search input
//  -dynamic search history
//  -5 day forcast linked to response.name ancher tag
//  -dynamic latitude and longitude varialbes for UV Index API


window.onload = function() {
var city = "denver";
var country = "us";
  // var city = $("#cityName").val();
  // var country = $("#countryName").val();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=e118a9757bbd90e8cbd8a9d2eff8445f";
  var today = new Date();
  
  var simpleDate = (today.getMonth()+1) + "/" + today.getDate() + "/" + today.getFullYear();
  // console.log(queryURL);
  
  var latitude = "37.75";
  var longitude = "-122.37";
  var uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=e118a9757bbd90e8cbd8a9d2eff8445f";
  var iconURL = "http://openweathermap.org/img/w/10d.png";

  $("#search").on("click", function(){
  
    $.ajax({
      url: uvURL,
      method: "GET"
    }).then(function(response) {
    // var latitude = response.coord.lat;
    // var longitude = response.coord.lon;
    console.log(response);
    console.log(uvURL);
    $(".uv").append("Current UV Index: " + response.value)
    });

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    
      console.log(response);
      var farenheit = (response.main.temp - 273.15) * 9/5 + 32;
      // var iconCode = "10d";
      $(".city").append("City: " + "<a href='#'>" + response.name + "</a>");
      $('#icon').append("<img id='wicon' src='" + iconURL + "' alt='Weather icon'>");
      $(".date").append("Today: " + simpleDate);
      $(".temp").append("Current temperature: " + Math.round(farenheit) + " &#xb0;F");
      $(".humidity").append("Current humidity: " + response.main.humidity + "%");
      $(".windSpeed").append("Current wind speed: " + response.wind.speed + " MPH");
      
    });

  });
  


};