  var request = new XMLHttpRequest();

  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Rotterdam,nl&APPID=76bc7e270d34fc4674660068349e5940', true);
  request.onload = function () {

    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    console.log(data);

  }

  request.send();
