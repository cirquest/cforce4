define(["backbone"], function(Backbone) {

	var PageModel = Backbone.Model.extend(
	{
	    defaults: 
	    {
	        title: "page",
	        description: "none"
	    }
	});

	return PageModel;
});