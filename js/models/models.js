var app = app || {};

/**
 * Item实体，具体的一个类
 * @type {void|*}
 */
app.Item = Backbone.Model.extend({
	defaults: {
		id: "",
		name:""
	},

	initialize: function() {

		this.on("invalid", function(model, error) {
			console.log(error);
		});
	},

	validate: function(attrs) {

	}
});

/**
 * item 的集合，由多个实体组成
 * @type {void|*}
 */
app.ItemCollection = Backbone.Collection.extend({
	model: app.Item
});

