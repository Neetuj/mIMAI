var app = {
    root: "/"
};
require.config({
	baseUrl: "scripts",
    paths:{
        // RequireJS plugin
        text:'libs/text',
        // RequireJS plugin
        domReady:'libs/domReady',
        // underscore library
        underscore:'libs/underscore',
        // Backbone.js library
        'Backbone':'libs/backbone',
        // jQuery
        jquery:'libs/jquery-1.9.1.min',
        // jQuery Mobile framework
        jqm:'libs/jquery.mobile-1.3.0.min',
		// jQuery Mobile config
		jqmConfig:'libs/jqm-config',
		
		// Application folders
		"collections": "collections",
		"models": "models",
		"routers": "routers",
		"templates": "templates",
		"views": "views"
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        },
		jqmConfig:{
			deps:['jquery']
		},
        jqm:{
            deps:['jquery', 'jqmConfig']
        }
    }
});

require(['jquery', 'Backbone', 'routers/MobileRouter', 'jqm'],
    function ($, Backbone, MobileRouter) {

		require( [ "jqm" ], function() {
			// Instantiates a new Backbone.js Mobile Router
			this.router = new MobileRouter();
			$(document).on("click", "a:not([data-bypass])", function(evt) {
			  var href = { prop: $(this).prop("href"), attr: $(this).attr("href") };
			  var root = location.protocol + "//" + location.host + app.root;

			  if (href.prop && href.prop.slice(0, root.length) === root) {
				evt.preventDefault();
				Backbone.history.navigate(href.attr, true);
			  }
			});
		});
	});