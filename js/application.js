$(document).ready(function () {

    var item1 = new app.Item({id:"1", name:"yin"});
    var item2 = new app.Item({id:"2", name:"wang"});
    var itemList = new app.ItemCollection(item1);
    itemList.add(item2);
    var itemListView = new app.ItemListView({
        model: itemList
    });

    $('#main').append(itemListView.render().$el);
});