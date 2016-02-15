module Weather{
    export class WeatherController{
        static initPage(){
            document.getElementById("weatherContent").innerHTML="Hello <b>Weather</b>";
            
            document.getElementById("fetchWeather").onclick=function(){
                var data={"weather":[
                    {
                        "day":"Monday",
                        "date":"08-02-2016",
                        "temperature":"12"
                    },
                    {
                        "day":"Tuesday",
                        "date":"09-02-2016",
                        "temperature":"13"
                    },
                    {
                        "day":"Wednesday",
                        "date":"10-02-2016",
                        "temperature":"14"
                    },
                    {
                        "day":"Thursday",
                        "date":"11-02-2016",
                        "temperature":"15"
                    },
                    {
                        "day":"Friday",
                        "date":"12-02-2016",
                        "temperature":"16"
                    },
                    {
                        "day":"Saturday",
                        "date":"13-02-2016",
                        "temperature":"17"
                    },
                    {
                        "day":"Sunday",
                        "date":"14-02-2016",
                        "temperature":"18"
                    }
                ]};
                
                document.getElementById("weatherData").innerHTML=Spa.App.namespace['weather/weather'](data);
            }
        }
    }
}