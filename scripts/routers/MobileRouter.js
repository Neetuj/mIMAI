define(["jquery", "Backbone", "views/Home/HomeView", "jqm"],
        
    function($, Backbone, HomeView) {

        var MobileRouter = Backbone.Router.extend({

            initialize: function() {
                Backbone.history.start();
            },

            routes: {
                "": "home"
            },

            home: function() {
                new HomeView();
            }
    
        });

        return MobileRouter;
    
	}

);