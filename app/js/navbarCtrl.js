// Navbar controller that we use to keep track of which tab is active
dinnerPlannerApp.controller('NavbarCtrl', function ($scope,$location) {

	$scope.isActive = function (viewLocation) { 
        return $location.path().indexOf(viewLocation) == 0;
    };
  
});