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
  // Creates a DOM element for a dish
  function createDish(dish) {
    return `
      <a href="#" id="${
        dish.id
      }" class="food-item list-group-flush list-group-item-action menu-item border-top" data-toggle="modal" data-target="#exampleModalCenter">
        <div class="item-name">
          ${dish.name}
          <p>${dish.description}.</p>
        </div>
        <div class="item-price pt-2">
          ${dish.price}
          <i class="fal fa-plus-square fa-lg pl-2"></i>
        </div>
      </a>
    `;
  }
  // Creates a DOM element for a single dish in modal
  function createDishModal(dish) {
    return `
      <div id="dish" class="modal-content" data-origin="${dish.id}">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
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
            <button type="button" class="btn btn-primary" id="add-to-cart">ADD TO CART
            </button>
          </div>
        </div>
    `;
  }

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
      $(".modal-dialog").empty();
      $(".modal-dialog").append(createDishModal(foodItem));
    }
  };

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

  // Enforces quantity value to be above 0 and sets the data value to the user input value
  $(".modal-dialog").on("change keyup", "#quantity-value", function(event) {
    if ($("#quantity-value").data("value") < 0) {
      $("#quantity-value").data("value", "0");
      $(this).val(0);
    } else {
      $("#quantity-value").data("value", $(this).val());
    }
  });
});
