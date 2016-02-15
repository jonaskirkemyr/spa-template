//This is the main file that will initialize the whole project :)

declare var JST:any;
Spa.App.namespace=JST;
Spa.App.container="content";
var app=new Spa.App();


let w=new Weather.WeatherRoute('weather');
w.initRoutes();

let home=new Home.HomeRoute('');
home.initRoutes();


window.onload=function(){
    app.init();
}