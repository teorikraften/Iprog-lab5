var NavBarView = function(container, model) {
	//container ska vara page-header
	this.hideView = function() {
		this.$ul.hide();
	}

	this.showView = function() {
		this.$ul.show();
	}

	this.update = function(obj) {
		
	}

	this.$ul = $("<ul/>").addClass("nav nav-tabs");
	this.$li_home = $("<li/>").addClass("active").html("<a href='#'>Home</a>");
	this.$li_overview = $("<li/>").html("<a href='#'>Overview</a>");
	this.$li_dishes = $("<li/>").html("<a href='#'>Dishes</a>");
	this.$li_instructions = $("<li/>").html("<a href='#'>Instructions</a>");

	this.$ul.append(this.$li_home);
	this.$ul.append(this.$li_overview);
	this.$ul.append(this.$li_dishes);
	this.$ul.append(this.$li_instructions);

	container.append(this.$ul);
}