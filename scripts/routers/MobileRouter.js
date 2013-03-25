define(["jquery", "Backbone", "views/home/HomeView", "views/drug/DrugView", "collections/DrugCollection", "jqm"],
        
    function($, Backbone, HomeView, DrugView, DrugCollection) {

        var MobileRouter = Backbone.Router.extend({
		

            initialize: function() {
                Backbone.history.start({ pushState: true, root: app.root });
            },

            routes: {
                "": "home",
				"drug": "drug"
            },

            home: function() {
                this.changePage(new HomeView());
            },
			
			drug: function() {
				var self = this;
				var drugCollection = new DrugCollection();
				drugCollection.fetch({
					success: function() {
						var drugView = new DrugView({collection: drugCollection});
						self.changePage(drugView);
					}
				});
			},
			
			changePage: function (page) {
				$(page.el).attr('data-role', 'page');
				page.render();
				$('body').append($(page.el));
				var transition = $.mobile.defaultPageTransition;
				// We don't want to slide the first page
				if (this.firstPage) {
					transition = 'none';
					this.firstPage = false;
				}
				$.mobile.changePage($(page.el), {changeHash:false, transition: transition});
			}
    
        });

        return MobileRouter;
    
	}

);