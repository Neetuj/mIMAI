define(["jquery","Backbone"], function ($, Backbone) {

	var DrugModel = Backbone.Model.extend({
		defaults: {
			id: null,
			category: null,
			name: null,
			fomulation: null,
		}
	});
	
	return DrugModel;
	
});