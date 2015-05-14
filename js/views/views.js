var app = app || {};

/**
 * 对应app.Item的模型，即一个列表其中的一条
 * 需要从script标签中提取模板，然后渲染
 * @type {void|*}
 */
app.ItemView = Backbone.View.extend({
    className: 'item',
    template: _.template($('#item-template').html()),
    render: function(){
        //$el和el都是属于this的变量，他们保存了渲染好的view，可以直接append
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

/**
 * 对应app.ItemCollection，即一个列表的所有view
 * @type {void|*}
 */
app.ItemListView = Backbone.View.extend({
    id: 'itemListView',
    viewList: [],
    render: function(){
        var self = this;
        var length = this.model.length;
        var models = this.model.models;

        //读取所有列表，循环渲染model，注意将ItemView的$el append到self.$el
        for(var i = 0; i < length; i++){
            var itemView = new app.ItemView({model: models[i]});
            self.viewList.push(itemView);
            var $subEl = itemView.render().$el;
            self.$el.append($subEl);
        }
        return this;
    }
});