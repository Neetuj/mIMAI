define(['jquery', 'Backbone', 'models/DrugModel', 'text!templates/drugs/DrugView.tpl', 'views/drugs/DrugNotesView', 'collections/DrugNoteCollection'],
    function ($, Backbone, DrugModel, DrugViewTemplate, DrugNotesView, DrugNoteCollection) {

        var DrugView = Backbone.View.extend({
			
			
			initialize: function() {
			},
			
			renderNoteView: function() {
				var drugNotes = new DrugNoteCollection();
				var self = this;
				drugNotes.fetch({
					success: function() {
						drugNotes.reset(drugNotes.where({ drugId: self.model.id }));
						var view = new DrugNotesView({collection: drugNotes});
					}
				});
			},
			
            render: function() {
                this.$el.html(_.template(DrugViewTemplate, { "model": this.model}));
				$('body').append($(this.el));
				this.renderNoteView();
                return this;
            }, 
			
        });

        return DrugView;
    });