define(['jquery', 'Backbone', 'models/DrugModel', 'text!templates/drug/DrugView.tpl', 'collections/DrugCollection'],
    function ($, Backbone, DrugModel, DrugViewTemplate, DrugCollection) {

        var DrugView = Backbone.View.extend({
			

			initialize: function() {
				this.collection.on('reset', this.render, this);
			},
			
            render: function() {
                this.$el.html(_.template(DrugViewTemplate, { "collection": this.collection}));
                return this;
            }, 
			
        });

        return DrugView;
    });