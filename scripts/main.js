/**
 * Created by Piotr Walczyszyn (@pwalczyszyn)
 *
 * User: pwalczys
 * Date: 2/16/12
 * Time: 9:20 AM
 */

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
		});
	});