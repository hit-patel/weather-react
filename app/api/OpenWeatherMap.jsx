var axios = require('axios');
const APIKey = '567df1aee57e69767a2d594dad86c4fe';

const OpenWeatherMapURL = `http://api.openweathermap.org/data/2.5/weather?&appid=${APIKey}&units=imperial`;
module.exports = {
  getTemp: function (location) {
    // this is very important
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OpenWeatherMapURL}&q=${encodedLocation}`;

    return axios
              .get(requestURL)
              .then(function (res) {
                console.log(res);
                if(res.data.cod && res.data.message) {
                  throw new Error(res.data.message);
                } else {
                  return res.data.main.temp;
                }
              }, function (rej) {
                throw new Error(rej.data.message);
              });

  }
}


// in Browser some characters can convert into Other Characters
