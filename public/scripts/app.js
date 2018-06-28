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
    let $article        = $('<article>');

    let $image          = $('<img>')
                            .attr('src', dish.image_url);

    let $a              = $('<a>')
                            .attr('href', '#')
                            .addClass('list-group-flush list-group-item-action menu-item border-top')
                            .data('toggle', 'modal')
                            .data('target', '#exampleModalCenter');

    let $desc_wrapper   = $('<div>')
                            .addClass('item-name')
                            .text(dish.name);
    let $description    = $('<p>')
                            .text(dish.description);

    let $plus_wrapper   = $('<div>')
                            .addClass('item-price pt-2')
                            .text(dish.price);

    let $plus           = $('<i>')
                            .addClass('fal fa-plus-square fa-lg pl-2');

    $plus_wrapper           .append($plus);
    $desc_wrapper           .append($description);

    $a                      .append($plus_wrapper)
                            .append($desc_wrapper);

    $article                .append($a);

    return $article;
  };

  // Renders dishes into index.html
  const renderFoodList = (foodArr) => {
    for(let article of foodArr){
      $('.soups')
        .append(createDish(article));
    }
  };


  // Ajax query to get a list of soups
  const loadFoodList = () => {
    $.ajax({
      method: "GET",
      url: "/soups"
    }).then(results => {
        renderFoodList(results);
    });
  };

  loadFoodList();

});
