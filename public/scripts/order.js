$(document).ready(function() {

// Create a DOM element for the order in process
function createOrderInProcess(item) {
    return `
    <tr class="order-in-process">
      <th class="order-id" scope="row">${item.id}</th>
      <td><button class="btn-send-sms">READY</button></td>
    </tr>
    `;
  }

  // Renders a single order into index.html
  const renderOrderInProcess = orderArr => {
    for (let orderItem of orderArr) {
      $(".order-list").append(createOrderInProcess(orderItem));
    }
  };


  // Gets the order object when being processed
  function getOrders () {
    $.ajax({
      method: "GET",
      url: `/orders/process`
    })
    .done(results => {
    renderOrderInProcess(results)
    })
    .catch(err => {
    console.log(err);
    });
  };

  getOrders();

   // Send sms to client when clicked and then clear out the order
   $(".table").on("click",".btn-send-sms", function(event) {
        $.ajax({
            method: "POST",
            url: `/orders/ready`
        })
        .done(results => {
        console.log(`helloooo----${results}`)
        renderOrderInProcess(results)
        })
        .catch(err => {
        console.log(err);
        });
        // console.log(`thisss---${this}`)
        // console.log(`event----${event}`)
        // console.log(`number--${("#order-table .order-id").text()}`)
  });

});