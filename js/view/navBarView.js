var NavBarView = function(container, model) {
	//container ska vara page-header

	$ul = $("<ul/>").addClass("nav nav-tabs");
	$li_home = $("<li/>").html("<a href='#'>Home</a>");
	$li_overview = $("<li/>").html("<a href='#'>Overview</a>");
	$li_dishes = $("<li/>").html("<a href='#'>Dishes</a>");
	$li_instructions = $("<li/>").html("<a href='#'>Instructions</a>");

	$ul.append($li_home);
	$ul.append($li_overview);
	$ul.append($li_dishes);
	$ul.append($li_instructions);

	container.append($ul);
}