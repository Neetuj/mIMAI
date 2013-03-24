define(['underscore', 'Backbone', 'text!templates/drugs/DrugsView.tpl'],
    function (_, Backbone, DrugsViewTemplate) {

        var DrugsView = Backbone.View.extend({

            events:{
                'click #btnBack':'btnBack_clickHandler'
            },

            render:function () {
                this.$el.html(_.template(DrugsViewTemplate));
                return this;
            },

            btnBack_clickHandler:function (event) {
                $.mobile.jqmNavigator.popView();
            }

        });

        return DrugsView;
    });