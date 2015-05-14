$(document).ready(function () {
    index.getData();
});

var index = {};
index.getData = function(){
    $.ajax({
        url:"js/data.json",
        dataType:'json',
        type:'get',
        success:function(data){
            index.renderpage(data);

        }
    });
}
index.renderpage = function(data){
    var itemList = new app.ItemCollection(item);
    for(var i =0;i<data.length;i++){
        var item = new app.Item(data[i]);
        itemList.add(item);
    }
    var itemListView = new app.ItemListView({
        model: itemList
    });

    $('#main').append(itemListView.render().$el);
}