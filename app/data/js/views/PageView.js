define(["backbone", "text!templates/page.html"], function(Backbone, pageTemplate) 
{

	var PageView = Backbone.View.extend(
	{
	    tagName: "div",
	    className: "page-wrap",
	    //template: $("#pageTemplate").html(),

	    template: _.template(pageTemplate),

	    render: function() 
	    {
	        //var templ = _.template(this.template);

	        var templ = this.template;
	        this.$el.html(templ(this.model.toJSON()));
	        return this;
	    }
	});

	return PageView;
});