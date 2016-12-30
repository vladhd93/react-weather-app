var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=d97f632005b5ef107664f1ca7400ad4a&units=metric';
//d97f632005b5ef107664f1ca7400ad4a
module.exports = {
    getTemp:function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

        return axios.get(requestUrl).then(function(res){

                if(res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                } else{
                    return res.data.main.temp;
                }
            },
            function(res){
                throw new Error(res.data.message);
            });
    }
};