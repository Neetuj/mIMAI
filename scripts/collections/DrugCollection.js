define(["jquery","Backbone","models/DrugModel"], function($, Backbone, DrugModel) {
	
	var Collection = Backbone.Collection.extend({
		model: DrugModel,
		initialize: function() {

		},
		url: "/data/drugs.json"
		
	});
	
	return Collection;
	
});