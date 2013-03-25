define(["jquery","Backbone"], function ($, Backbone) {

	var DrugModel = Backbone.Model.extend({
		defaults: {
			category: null,
			name: null
		}
	});
	
	return DrugModel;
	
});