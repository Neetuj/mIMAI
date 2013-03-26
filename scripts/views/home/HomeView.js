define(['jquery', 'underscore', 'Backbone',  'text!templates/home/HomeView.tpl', 'jqm'],
    function ($, _, Backbone, HomeViewTemplate) {
        var HomeView = Backbone.View.extend({
			
			initialize: function() {
				this.render();
			},
			
            render:function () {
				this.template = _.template(HomeViewTemplate);
                this.$el.html(this.template);
				this.$el.trigger('create');
				$('body').append($(this.el));
                return this;
            },

        });
        return HomeView;
    });