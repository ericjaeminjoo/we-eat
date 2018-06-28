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
  $("#decrease-quantity").click(function() {
    let quantity = $("#quantity-value").val();
    if ($("#quantity-value").val() <= 0) {
      $("#decrease-quantity").attr("disabled", "disabled");
    } else {
      $("#quantity-value").attr("value", --quantity);
    }
  });

  $("#increase-quantity").click(function () {
    let quantity = $("#quantity-value").val();
    console.log(quantity);
    if ($("#quantity-value").val() >= 0) {
      $("#decrease-quantity").removeAttr("disabled");
    }
    $("#quantity-value").attr("value", ++quantity);
  });

  // Creates a DOM for a dish
  function createDish(dish) {
    return  `
      <a href="#" id=${dish.id} class="list-group-flush list-group-item-action menu-item border-top" data-toggle="modal" data-target="#exampleModalCenter">
        <div class="item-name">
          ${dish.name}
          <p>${dish.description}.</p>
        </div>
        <div class="item-price pt-2">
          $${dish.price}
          <i class="fal fa-plus-square fa-lg pl-2"></i>
        </div>
      </a>
    `
  };

  // Renders dishes into index.html
  const renderAppetizers = (foodArr) => {
    for(let foodItem of foodArr){
      $('#coldapp')
        .append(createDish(foodItem));
    }
  };

  // Ajax query to get a list of soups
  const loadAppetizers = () => {
    $.ajax({
      method: "GET",
      url: "/appetizers"
    }).then(results => {
        renderAppetizers(results);
    });
  };

  // Renders dishes into index.html
  const renderSoups = (foodArr) => {
    for (let foodItem of foodArr) {
      $('#soups')
        .append(createDish(foodItem));
    }
  };

  // Ajax query to get a list of soups
  const loadSoups = () => {
    $.ajax({
      method: "GET",
      url: "/soups"
    }).then(results => {
      renderSoups(results);
    });
  };

  // Renders dishes into index.html
  const renderTeriyaki = (foodArr) => {
    for (let foodItem of foodArr) {
      $('#teriyaki')
        .append(createDish(foodItem));
    }
  };

  // Ajax query to get a list of soups
  const loadTeriyaki = () => {
    $.ajax({
      method: "GET",
      url: "/teriyaki"
    }).then(results => {
      renderTeriyaki(results);
    });
  };

  loadAppetizers();
  loadSoups();
  loadTeriyaki();
});
