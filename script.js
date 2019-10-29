//STILL NEED:
//  -functional city, country search input
//  -dynamic search history
//  -5 day forcast linked to response.name ancher tag
//  -dynamic latitude and longitude varialbes for UV Index API


window.onload = function () {
  // var city = "denver";
  $("#search").on("click", function (event) {
    event.preventDefault();
    // $("#citName").empty();
    // $("#countryName").empty();
    let city = $("#cityName").val().trim() || ("denver");
    console.log(city);
    // var country = "us";
    let country = $("#countryName").val().trim() || ("us");
    console.log(country);
    // var city = $("#cityName").val();
    // var country = $("#countryName").val();
    var today = new Date();

    var simpleDate = (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
    // console.log(queryURL);

    var latitude = "37.75";
    var longitude = "-122.37";
    var uvURL = "https://api.openweathermap.org/data/2.5/uvi?lat=" + latitude + "&lon=" + longitude + "&appid=e118a9757bbd90e8cbd8a9d2eff8445f";
    var iconURL = "https://openweathermap.org/img/w/10d.png";
    const queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&APPID=e118a9757bbd90e8cbd8a9d2eff8445f";


    $.ajax({
      url: uvURL,
      method: "GET"
    }).then(function (response) {
      // var latitude = response.coord.lat;
      // var longitude = response.coord.lon;
      console.log(response);
      console.log(uvURL);
      $(".uv").append("Current UV Index: " + response.value)
    });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      console.log(response);
      var farenheit = (response.main.temp - 273.15) * 9 / 5 + 32;
      // var iconCode = "10d";
      $(".city").html("City: " + "<a href='#'>" + response.name + "</a>");
      $('#icon').html("<img id='wicon' src='" + iconURL + "' alt='Weather icon'>");
      $(".date").html("Today: " + simpleDate);
      $(".temp").html("Current temperature: " + Math.round(farenheit) + " &#xb0;F");
      $(".humidity").html("Current humidity: " + response.main.humidity + "%");
      $(".windSpeed").html("Current wind speed: " + response.wind.speed + " MPH");

    });

  });



};