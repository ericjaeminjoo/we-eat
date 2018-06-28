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
  // Creates a DOM for a dish
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

  // Object for Food Category (/url and #id)
  const foodCategoryObj = {
    "/appetizers": "#coldapp",
    "/soups": "#soups",
    "/teriyaki": "#teriyaki"
  };

  // Renders dishes into index.html
  const renderFoodCategory = (foodArr, elementCategory) => {
    for(let foodItem of foodArr){
      $(elementCategory)
        .append(createDish(foodItem));
    }
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

  // Gets the dish object by its id when clicked
  $('#menu-container').on('click', '.food-item', function (event) {
    $.ajax({
      method: "GET",
      url: `/dish/${this.id}`
    }).done(results => {
      renderSingleDish(results);
    }).catch(err => {
      console.log(err);
    })
  });

  // Renders a single dish into index.html
  const renderSingleDish = (foodArr) => {
    for (let foodItem of foodArr) {
      $('#dish')
        .append(createDish(foodItem));
    }
  };

});
