module Home{
    export class HomeRoute extends Spa.Route{
         constructor(route: string) {
            super(route);
            this.setRouteTitle("Home");
        }
        
        initRoutes(){
            var parent=this;
            
            super.addRoute('/',function(){
               parent.render('index'); 
            });
        }
    }
}