define(["jquery","Backbone"], function ($, Backbone) {

	var DrugNoteModel = Backbone.Model.extend({
		defaults: {
			id: null,
			drugId: null,
			tag: null,
			note: null
		}
	});
	
	return DrugNoteModel;
	
});