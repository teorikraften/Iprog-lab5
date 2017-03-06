// Here we create an Angular service that we will use for our 
// model. In your controllers (or other services) you can include the
// dependency on any service you need. Angular will insure that the
// service is created first time it is needed and then just reuse it
// the next time.
dinnerPlannerApp.factory('Dinner',function ($resource, $cookieStore) {

  var parent = this;

  this.guests = 1;
  this.menu = [];

  this.setNumberOfGuests = function(num) {
    if(num > 0) {
      this.guests = num;
      $cookieStore.put("guests", this.guests);
    }
  }

  this.getNumberOfGuests = function() {
    return this.guests;
  }

  //Returns the dish that is on the menu for selected type 
  this.getSelectedDish = function(type) {
    return this.menu.filter(function(dish) {
        return dish.type == type;
      }); 
  }

  //Returns all the dishes on the menu.
  this.getFullMenu = function() {
    return this.menu;
  }

  //Returns all ingredients for all the dishes on the menu.
  this.getAllIngredients = function() {
    var ingredients = [];
    this.menu.forEach(function(dish) {
      dish.extendedIngredients.forEach(function(ingredient) {
        ingredients.push(ingredient);
      });
    });
    return ingredients;
  }

  //Returns the total price of the menu (all the ingredients multiplied by number of guests).
  this.getTotalMenuPrice = function() {
    var allIngredients = this.getAllIngredients();
    var totalPrice = 0;

    allIngredients.forEach(function(ingredient) {
      totalPrice += ingredient.amount;
    });

    return totalPrice*this.guests;
  }

  //Adds the passed dish to the menu. If the dish of that type already exists on the menu
  //it is removed from the menu and the new one added.
  this.addDishToMenu = function(dish) {
    var newDish = dish;
    var exists = false;

    // check if dish of same type exists
    this.menu.forEach(function(dish, i, menu) {
      if(dish.id == newDish.id) {
        exists = true;
        menu[i] = newDish;
      }
    });

    if(!exists) {
      this.menu.push(newDish);
      $cookieStore.put("menu", _.pluck(this.menu, "id"));
    } 
  }

  //Removes dish from menu
  this.removeDishFromMenu = function(id) {
    this.menu.forEach(function(dish, i, menu) {
      if(id == dish.id) {
        menu.splice(i, 1);
        $cookieStore.put("menu", _.pluck(menu, "id"));  
      }
    });
  }

  // search for dish (in controller: Dinner.DishSearch.get({query:'hummus',type:'appetizer'}))
  this.DishSearch = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/search',{},{
    get: {
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      }
    }
  });

  // get a summary of the dish (used in dishInformation view)
  this.DishSummary = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/summary', {}, {
    get: {
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      }
    }
  });

  // returns a json object with stepwise instructions
  this.DishInstructions = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/analyzedInstructions', {}, {
    query: {
      method: 'GET',
      isArray: true,
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'        
      }
    }
  });

      // example call: Dinner.Dish.get({id:583901}).
  this.Dish = $resource('https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/:id/information',{},{
    get: {
      headers: {
        'X-Mashape-Key': 'Qu9grxVNWpmshA4Kl9pTwyiJxVGUp1lKzrZjsnghQMkFkfA4LB'
      }
    }
  });

  this.getMenuFromId = function(menu) {
    if(menu != undefined) {
    menu.forEach(function(dishId, i) {
      parent.Dish.get({id: dishId}, function(dish) {
        menu[i] = dish;
      });
    });
    }
    return menu;
  }


  this.getDishPrice = function (ID) {
    var price = 0;
    this.menu.forEach(function(dish) {
      if (dish.id == ID) {
        dish.extendedIngredients.forEach(function(ingredient) {
          price += ingredient.amount;
        });
      }
    });
    return price*this.getNumberOfGuests();
  }

  // TODO in Lab 5: Add your model code from previous labs
  // feel free to remove above example code
  // you will need to modify the model (getDish and getAllDishes) 
  // a bit to take the advantage of Angular resource service
  // check lab 5 instructions for details


  this.guests = $cookieStore.get("guests") || 1;
  this.menu = this.getMenuFromId($cookieStore.get("menu")) || [];

  console.log(this.menu);


  // Angular service needs to return an object that has all the
  // methods created in it. You can consider that this is instead
  // of calling var model = new DinnerModel() we did in the previous labs
  // This is because Angular takes care of creating it when needed.
  return this;

});