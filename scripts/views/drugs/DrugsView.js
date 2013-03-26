define(['jquery', 'Backbone', 'models/DrugModel', 'text!templates/drugs/DrugsView.tpl', 'collections/DrugCollection'],
    function ($, Backbone, DrugModel, DrugCollectionViewTemplate, DrugCollection) {

        var DrugCollectionView = Backbone.View.extend({

			initialize: function() {
				this.collection.on('reset', this.render, this);
			},
			
            render: function() {
                this.$el.html(_.template(DrugCollectionViewTemplate, { "collection": this.collection}));
				$('body').append($(this.el));
                return this;
            }, 
			
        });

        return DrugCollectionView;
    });