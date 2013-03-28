define(["jquery","Backbone","models/DrugNoteModel"], function($, Backbone, DrugNoteModel) {
	
	var Collection = Backbone.Collection.extend({
		model: DrugNoteModel,
		initialize: function() {

		},
		url: "/data/drug-notes.json"
		
	});
	
	return Collection;
	
});