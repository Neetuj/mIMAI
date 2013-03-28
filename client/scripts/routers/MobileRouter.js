define(["jquery", 
		"Backbone", 
		"views/home/HomeView", 
		"views/drugs/DrugView", 
		"views/drugs/DrugsView", 
		"collections/DrugCollection", 
		"jqm"
		],
        
    function($, Backbone, HomeView, DrugView, DrugsView, DrugCollection) {

        var MobileRouter = Backbone.Router.extend({
		
            initialize: function() {
                Backbone.history.start({ pushState: true, root: app.root });
            },

            routes: {
                "": "home",
				"drugs": "drugs",
				"drugs/:id": "drug"		
            },

            home: function() {
                this.changePage(new HomeView());
            },
			
			drugs: function() {
				var self = this;
				this.drugs = new DrugCollection();
				console.log(this.drugs);
				this.drugs.fetch({
					success: function() {
						var view = new DrugsView({collection: self.drugs});
						self.changePage(view);
					}
				});
			},
			
			drug: function(id) {
				var drug = this.drugs.get(id);
				var view = new DrugView({model: drug});
				this.changePage(view);
			},
			
			changePage: function (page) {
				$(page.el).attr('data-role', 'page');
				page.render();
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