//======= reder data to view scope============
first_view = Backbone.View.extend({
    el: 'body',
    initialize: function () {
        this.$el.empty();// reset view
        this.render();
    },

    render: function () {
        this.$el.append("<h1>The Whisky APP - nhu</h1>");
        this.list_view = new List_view();
        this.$el.append(this.list_view.render().el);
        return this;
    }
});

List_view = Backbone.View.extend({
    tagName: 'ul',
    render: function () {
        this.$el.empty();
        this.$el.append("<li>Nhu</li>");
        this.$el.append("<li>Dat</li>");
        this.$el.append("<li>Huu</li>");
        return this;
    }
});
index_view = new first_view();