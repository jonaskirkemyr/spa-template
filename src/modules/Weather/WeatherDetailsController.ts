class WeatherDetailsController {
    static initPage(id: number) {
        var data = {
            "coord": {
                "lon": -0.13,
                "lat": 51.51
            },
            "id": 2643743,
            "name": "London"
        };
        document.getElementById("weatherData").innerHTML = Spa.App.namespace['weather/details'](data);
    }
}