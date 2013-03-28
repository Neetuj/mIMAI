define(['jquery', 'Backbone', 'models/DrugNoteModel', 'text!templates/drugs/DrugNotesView.tpl'],
    function ($, Backbone, DrugNoteModel, DrugNotesViewTemplate) {

        var DrugNotesView = Backbone.View.extend({
			
			className: ".ui-content",
			
			initialize: function() {
				this.render()
			},
			
            render: function() {
                $(this.className).append(_.template(DrugNotesViewTemplate, { "collection": this.collection}));
				$(this.className).trigger("create");
                return this;
            }, 
			
        });

        return DrugNotesView;
    });