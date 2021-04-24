//sy

$(document).ready(function () {
    $("#final-order-details").hide();
    $("#deliver").hide();



    //business logic
    var totalPriceArray = [];

    function Order(size, crust, toppings, amount) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.pizzaPrice = 0;
        this.amount = amount;

    }


    Order.prototype.pizzaCost = function () {
        //pizza size and its cost
        if (this.size === "small-pizza") {
            this.pizzaPrice += 550;
        } else if (this.size === "medium-pizza") {
            this.pizzaPrice += 800;
        } else if (this.size === "large-pizza") {
            this.pizzaPrice += 1200;
        }
        //pizza crust and its cost
        if (this.crust === "cheese-filled") {
            this.pizzaPrice += 150;
        } else if (this.crust === "gluten-free") {
            this.pizzaPrice += 185;
        } else if (this.crust === "stuffed") {
            this.pizzaPrice += 170;
        } else if (this.crust === "crispy") {
            this.pizzaPrice += 150;
        }
        //pizza toppings and its cost
        if (this.toppings === "pepperoni") {
            this.pizzaPrice += 100;
        } else if (this.toppings === "olives") {
            this.pizzaPrice += 150;
        } else if (this.toppings === "bacon") {
            this.pizzaPrice += 250;
        } else if (this.toppings === "mushrooms") {
            this.pizzaPrice += 150;
        } else if (this.toppings === "chicken-bbq") {
            this.pizzaPrice += 250;
        } else if (this.toppings === "pinapple") {
            this.pizzaPrice += 105;
        } else if (this.toppings === "cheese") {
            this.pizzaPrice += 165;
        }
    };
      //Business logic
      function Address(addresses) {
        this.addresses = addresses;
        this.deliveryAddress = (addresses);
      }

      //order
      Order.prototype.finalCost = function() {
        var cartTotalPrice = [];
        for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
          cartTotalPrice += totalPriceArray[arrayElement];
        }
        return cartTotalPrice;
      };
});