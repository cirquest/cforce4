define(["backbone","collections/PageCollection", "views/PageView"], function(Backbone, PageCollection, PageView) {

	var PageCollectionView = Backbone.View.extend(
	{
	    el: $("#chapter"),
	    initialize: function() 
	    {
			var pages = 
			[
			    { title: "Page 1", description: "This is page 1" },
			    { title: "Page 2", description: "This is page 2" },
			    { title: "Page 3", description: "This is page 3" },
			    { title: "Page 4", description: "This is page 4" },
			    { title: "Page 5", description: "This is page 5" }
			];

	    	var pageCollection = new PageCollection(pages);

	        this.collection = pageCollection;
	        this.render();
	    },
	    render: function() 
	    {
	        this.collection.each(function(item) 
	        {
	            this.renderPage(item);
	        }, this);
	    },
	    renderPage: function(item) 
	    {
	        var pageView = new PageView({ model: item });
	        this.$el.append(pageView.render().el); 
	    }
	});

	return PageCollectionView;
});