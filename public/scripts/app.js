// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

$(document).ready(function() {
  // Creates a DOM element for cart items
  function createCartItems(item) {
    return `
      <div class="row d-flex justify-content-between" id="${item.id}">
        <div class="item-name">
          ${item.qty} x
          ${item.name}
          <p>${item.description}</p>
        </div>
        <div class="item-price pt-2">
          $${item.lineTotal}
          <button class="fal fa-times fa-lg pl-2 remove-item-btn"></button>
        </div>
      </div>
    `;
  }

  // Creates a DOM element for a dish
  function createDish(dish) {
    return `
      <a href="#" id="${
        dish.id
      }" class="food-item list-group-flush list-group-item-action menu-item border-top d-flex justify-content-between" data-toggle="modal" data-target="#menu-item-modal">
        <div class="item-name">
          ${dish.name}
          <p>${dish.description}</p>
        </div>
        <div class="item-price pt-2">
          $${dish.price}
          <i class="fa fa-plus-square fa-lg pl-2"></i>
        </div>
      </a>
    `;
  }

  // Creates a DOM element for a single dish in modal
  function createDishModal(dish) {
    return `
      <div id="dish" class="modal-content" data-origin="${dish.id}">
          <div class="modal-header">
            <h5 class="modal-title">
              ${dish.name}
            </h5>
            <a class="close" data-dismiss="modal" aria-label="Close">
              <i class="fal fa-times-circle"></i>
            </a>
          </div>
          <div class="modal-body">
            ${dish.description}
          </div>
          <div class="modal-footer d-flex justify-content-between">
            <div>
              <button id="decrease-quantity">
                <i class="fal fa-minus"></i>
              </button>
              <input type="text" id="quantity-value" value="1" data-value="1" class="text-center"></input>
              <button id="increase-quantity">
                <i class="fal fa-plus"></i>
              </button>
            </div>
            <button type="button" class="btn btn-primary" id="add-to-cart" data-dismiss="modal">ADD TO CART
            </button>
          </div>
        </div>
    `;
  }

  // Cart array to hold all menu items user wants
  let cart = [];

  // Cart array to hold all menu items user wants
  let order = [];

  // Object for Food Category (/url and #id)
  const foodCategoryObj = {
    "/appetizers": "#coldapp",
    "/soups": "#soups",
    "/teriyaki": "#teriyaki"
  };

  // Ajax query to get a list of food category
  const loadFoodCategory = (url, elementResult) => {
    $.ajax({
      method: "GET",
      url: url
    }).then(results => {
      renderFoodCategory(results, elementResult);
    });
  };

  // For In Loop to Print Out the Food Category to HTML
  for (let foodCategoryEl in foodCategoryObj) {
    loadFoodCategory(foodCategoryEl, foodCategoryObj[foodCategoryEl]);
  }

  // Renders dishes into index.html
  const renderFoodCategory = (foodArr, elementCategory) => {
    for (let foodItem of foodArr) {
      $(elementCategory).append(createDish(foodItem));
    }
  };

  // Renders a single dish into index.html
  const renderSingleDishModal = foodArr => {
    for (let foodItem of foodArr) {
      $("#menu-item-modal-container").empty();
      $("#menu-item-modal-container").append(createDishModal(foodItem));
    }
  };

  // Renders menu items for cart modal into index.html
  const renderCartItems = cartArr => {
    let subTotal = 0,
      serviceFee = 2.99,
      total = 0;

    cartArr.forEach(item => {
      subTotal += parseFloat(item.lineTotal);
      $("#cart-items").append(createCartItems(item));
    });

    if (cartArr.length === 0) {
      total = 0;
    } else {
      total = subTotal * 1.15 + serviceFee;
    }

    $("#subtotal-amount").text(subTotal.toFixed(2));
    $("#total-amount").text(total.toFixed(2));

    $(".remove-item-btn").click(function() {
      const removedItemID = $(this)
        .parent()
        .parent()
        .attr("id");
      cart.forEach(item => {
        if (item.id == removedItemID) {
          cart.splice(cart.indexOf(item), 1);
          subTotal -= item.lineTotal;
          if (cart.length === 0) {
            total = 0;
          } else {
            total = subTotal * 1.15 + serviceFee;
          }
          $("#subtotal-amount").text(subTotal.toFixed(2));
          $("#total-amount").text(total.toFixed(2));
        }
      });
      $(this)
        .parent()
        .parent()
        .remove();
    });

    // Removes 'empty cart' alert on modal
    $(".alert-danger").remove();
  };

  // Places the order from the cart
  $(".modal-footer").on("click", "#checkout-btn", function(event) {
    // $.ajax({
    //   method: "GET",
    //   url: `/order`
    // })
    //   .done(results => {
    //     const lineTotal = $("#quantity-value").data("value") * parseFloat(results[0].price);
    //     obj = {
    //       cart: cart,
    //       subTotal: subTotal.toFixed(2),
    //       total: total.toFixed(2)
    //     }
    //     order.push(obj)
    //     console.log(order)
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    console.log("Cart: ", cart);
    obj = {
      cart: cart,
      subTotal: $("#subtotal-amount").html(),
      serviceFee: 2.99,
      total: $("#total-amount").html()
    };
    order.push(obj);
    //`}
    console.log(obj);
    cart = [];
    order = [];
    obj = {};

    for(let orderElement of order) {  // passing the object Order as an event
      $.ajax({
        method: "POST",
        url: `/order`,
        data: $(this).serialize() // cart items from the client selection
        // url: `/order/${dishId}`
      })
        .done(results => {
        console.log(`data----: ${data}`)
        })
      };


    if ($(".phone-number").val() == "") {
      $(".phone-number").addClass("is-invalid");
      $(".invalid-feedback").empty();
      $(".phone-number-container").append(() => {
        return `
        <div class="invalid-feedback">
          A telephone number is required, please enter your telephone number.
        </div>
        `
      });
    }
    if (cart.length === 0) {
      $(".alert-danger").remove();
      $(".modal-footer").prepend(() => {
        return `
        <div class="alert alert-danger" role="alert">
          Cannot process empty order, please add items to your cart.
        </div>
        `
      });
    }
    else {
      $(".phone-number").removeClass("is-invalid");
      $(".invalid-feedback").remove();
      console.log("Cart: ", cart);
      obj = {
        cart: cart,
        subTotal: $("#subtotal-amount").html(),
        serviceFee: 2.99,
        total: $("#total-amount").html(),
        telephone: $(".phone-number").val()
      };
      order.push(obj);
      //`}
      console.log(obj);

      // After menu items have been ordered, everything is reset
      cart = [];
      order = [];
      obj = {};
      $(".phone-number").val("");
      $('#checkout-modal').modal('hide');
    }
  });

  // Gets the dish object by its id when clicked
  $("#menu-container").on("click", ".food-item", function(event) {
    $.ajax({
      method: "GET",
      url: `/dish/${this.id}`
    })
      .done(results => {
        renderSingleDishModal(results);
      })
      .catch(err => {
        console.log(err);
      });
  });

  // Increases qty of single dish on modal
  $(".modal-dialog").on("click", "#increase-quantity", function(event) {
    let quantity = Number($("#quantity-value").data("value"));
    quantity++;

    if (quantity >= 0) {
      $("#decrease-quantity").removeAttr("disabled");
    }

    $(this)
      .siblings("input")
      .val(quantity);
    $("#quantity-value").data("value", quantity);
  });

  // Decreases qty of single dish on modal
  $(".modal-dialog").on("click", "#decrease-quantity", function(event) {
    let quantity = Number($("#quantity-value").data("value"));
    quantity--;

    if (quantity <= 0) {
      $("#decrease-quantity").attr("disabled", "disabled");
    }

    $(this)
      .siblings("input")
      .val(quantity);
    $("#quantity-value").data("value", quantity);
  });

  // *** NOT USED FOR NOW *** Verifies if an item exists in the cart
  const verifyBeforeAddingToCart = (dishId, cartArray) => {
    for (let item of cartArray) {
      if (item.id === dishId) {
        return false;
      } else {
        return true;
      }
    }
  };

  // Adds an item to the cart
  $(".modal-dialog").on("click", "#add-to-cart", function(event) {
    const dishId = $("#dish").data("origin");
    $.ajax({
      method: "GET",
      url: `/dish/${dishId}`
    })
      .done(results => {
        const lineTotal =
          $("#quantity-value").data("value") * parseFloat(results[0].price);
        const obj = {
          id: results[0].id,
          name: results[0].name,
          description: results[0].description,
          price: results[0].price,
          image_url: results[0].image_url,
          qty: $("#quantity-value").data("value"),
          lineTotal: lineTotal.toFixed(2)
        };
        cart.push(obj);
        console.log("Cart: ", cart);
      })
      .catch(err => {
        console.log(err);
      });
  });

  // On cart button click, render cart items dynamically
  $("#cart-btn").click(() => {
    $("#cart-items").empty();
    renderCartItems(cart);
  });

  // Enforces quantity value to be above 0 and sets the data value to the user input value
  $(".modal-dialog").on("change keyup", "#quantity-value", function(event) {
    if ($("#quantity-value").data("value") < 0) {
      $("#quantity-value").data("value", "0");
      $(this).val(0);
    } else {
      $("#quantity-value").data("value", $(this).val());
    }
  });

  //Smooth scrolling with links
  $("a[href*=\\#]").on("click", function(event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top - 80 }, 700);
  });
});
