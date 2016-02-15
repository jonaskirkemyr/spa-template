module Weather {
    export class WeatherRoute extends Spa.Route {
        
        /**
         * @param  {string} route the url which the route should be made accessible
         */
        constructor(route: string) {
            super(route);
            this.setRouteTitle("Weather");
        }

        initRoutes() {
            var parent = this;
            super.addRoute('/', function() {
                parent.setRouteTitle("Weather Home");
                parent.render('weather/index');
                WeatherController.initPage();
                
            });
            
            super.addRoute('/{id}',function(id){
               parent.setRouteTitle("Weather Details");
               parent.render('weather/index');
               WeatherDetailsController.initPage(id); 
            });
        }



    }
}