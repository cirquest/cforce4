define(["backbone","models/PageModel"], function(Backbone, PageModel) {

	var PageCollection = Backbone.Collection.extend(
	{
	     model: PageModel
	});

	return PageCollection;
});