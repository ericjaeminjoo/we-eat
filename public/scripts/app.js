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
    return  `
      <a href="#" id="${dish.id}" class="food-item list-group-flush list-group-item-action menu-item border-top" data-toggle="modal" data-target="#exampleModalCenter">
        <div class="item-name">
          ${dish.name}
          <p>${dish.description}.</p>
        </div>
        <div class="item-price pt-2">
          ${dish.price}
          <i class="fal fa-plus-square fa-lg pl-2"></i>
        </div>
      </a>
    `
  };
  // Creates a DOM element for a single dish in modal
  function createDishModal(dish) {
    return  `
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
              <input type="text" id="quantity-value" data-value="1" class="text-center"></input>
              <button id="increase-quantity">
                <i class="fal fa-plus"></i>
              </button>
            </div>
            <button type="button" class="btn btn-primary" id="add-to-cart">ADD TO CART
            </button>
          </div>
        </div>
    `
  };

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
  for(let foodCategoryEl in foodCategoryObj){
    loadFoodCategory(foodCategoryEl, foodCategoryObj[foodCategoryEl]);
  };

  // Renders dishes into index.html
  const renderFoodCategory = (foodArr, elementCategory) => {
    for(let foodItem of foodArr){
      $(elementCategory)
        .append(createDish(foodItem));
    }
  };

  // Renders a single dish into index.html
  const renderSingleDishModal = (foodArr) => {
    for (let foodItem of foodArr) {
      $('.modal-dialog')
        .append(createDishModal(foodItem));
    }
  };

  // Gets the dish object by its id when clicked
  $('#menu-container').on('click', '.food-item', function (event) {
    $.ajax({
      method: "GET",
      url: `/dish/${this.id}`
    }).done(results => {
      renderSingleDishModal(results);
    }).catch(err => {
      console.log(err);
    })
  });

  // Removes DOM element when modal closes
  if ($(".modal-dialog")[0]) {
    $(document).click((() => {
      $("#dish").remove();
    }))
  }


  // Increases qty of single dish on modal
  $(".modal-dialog").on('click', '#increase-quantity', function(event) {
    let quantity = Number($("#quantity-value").data('value'));
    if (quantity >= 2) {
      $("#decrease-quantity").removeAttr("disabled");
    }
      console.log('clicked +');
      $("#quantity-value").data('value', quantity + 1);
      console.log($("#quantity-value").data('value'));
  });

  // Decreases qty of single dish on modal
  $(".modal-dialog").on('click', '#decrease-quantity', function(event) {
    let quantity = Number($("#quantity-value").data('value'));
    if (quantity <= 0) {
      $("#decrease-quantity").attr("disabled");
    }
      console.log('clicked -');
      $("#quantity-value").data('value', quantity - 1);
      console.log($("#quantity-value").data('value'));
  });

});
