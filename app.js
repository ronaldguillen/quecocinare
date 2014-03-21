// Main Application

$(function(){
    
    var Recipe = Backbone.Model.extend({
        defaults:{
            title: 'Receta 01',
            category: 'null',
            link: '#',
            image: 'assets/images/receta.png',
            summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'
        }
    });
    
    var RecipeList = Backbone.Collection.extend({
        model: Recipe,
        getAll: function(){
            return this.models;
        },
        getByCategory: function(category){
            return this.where({category:category});
        }
    });
    
    var recipes = new RecipeList([
        new Recipe({ title: 'Brochetas de Mariscos', category: 'aperitivos', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Causa de Atun', category: 'aperitivos', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Tamales', category: 'aperitivos', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Tostadas Francesas', category: 'desayunos', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Humitas Dulces', category: 'desayunos', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Tortilla de Papa', category: 'desayunos', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Saltado de Vainitas', category: 'vegetariano', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Hamburguesas de Tofu', category: 'vegetariano', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Tallarines con Verduras', category: 'vegetariano', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Cheesecake de Sauco', category: 'postres', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Mazamorra Morada', category: 'postres', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Picarones', category: 'postres', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Ensalada Caesar', category: 'ensaladas', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Ensalada Esmeralda', category: 'ensaladas', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Esalada California', category: 'ensaladas', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Pescado al Vapor', category: 'saludable', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Saltado de Verduras', category: 'saludable', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'}),
        new Recipe({ title: 'Jugo con Cereales', category: 'saludable', link: '#', image: 'assets/images/receta.png', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at nisl vel dui tempor volutpat. Morbi vitae risus non justo viverra suscipit.'})
        
    ]);
    
    var HomeView = Backbone.View.extend({
    	initialize: function() {
    		$("#content").html(this.$el);
    		this.render();
    	},
    	render: function() {
    		var template = Handlebars.compile( $("#home-template").html() );
            this.$el.html( template({ aperitivos: recipes.getByCategory('aperitivos'), desayunos: recipes.getByCategory('desayunos'), vegetariano: recipes.getByCategory('vegetariano'), postres: recipes.getByCategory('postres'), ensaladas: recipes.getByCategory('ensaladas'), saludable: recipes.getByCategory('saludable') }) );
            //console.log(recipes.models[0].attributes.title);
    	}
    });
    
    var AperitivosView = Backbone.View.extend({
    	initialize: function() {
    		$("#content").html(this.$el);
    		this.render();
    	},
    	render: function() {
    		var template = Handlebars.compile( $("#aperitivos-template").html() );
            this.$el.addClass('page');
            this.$el.html( template({ aperitivos: recipes.getByCategory('aperitivos') }) );    	
        }
    });
    
    
    var Router = Backbone.Router.extend({
    	routes : {
    		"" : "defaultRoute",
    		"aperitivos" : "aperitivosRoute"
    	},
    	defaultRoute : function() {
    		this.view = new HomeView();
    	},
    	aperitivosRoute : function() {
    		this.view && this.view.remove();
    		this.view = new AperitivosView();
    	}
    });
    
    // Start the magic!
    var router = new Router();
    Backbone.history.start({ root: "/" });
});