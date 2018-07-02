$(document).ready(function() {

  let orderObj = {};

  // Create a DOM element for the order in process
  const createOrderInProcess = item => {
    return `
    <tr class="order-in-process">
      <th id="${item.id}" class="in-process" scope="row">${item.id}</th>
      <td><button id="${item.id}" class="btn-send-sms">READY</button></td>
    </tr>
    `;
  }

  // Renders a single order into index.html
  const renderOrderInProcess = orderArr => {
    for (let orderItem of orderArr) {
      $(".order-list").append(createOrderInProcess(orderItem));
    }
  };


  // Gets the orders that needs to be completed
  const getOrders = () => {
    $.ajax({
      method: "GET",
      url: `/orders/process`
    })
    .done(results => {
      orderObj = results;
      renderOrderInProcess(results);
    })
    .catch(err => {
      console.log(err);
    });
  };

  // Loads orders on html
  getOrders();

  // Sends sms to client to pickup his order
  $(".table").on("click",".btn-send-sms", function() {
      let orderReady = {};
      for(let item of orderObj){
        if(this.id == item.id){
          orderReady = item;
          $.ajax({
              method: "POST",
              url: `/orders/ready`,
              data: orderReady
          })
          .done(results => {
            console.log(results);
          })
          .catch(err => {
            console.log(err);
          })
        }
      }
      // Removes row from list
      $(this)
        .parent()
        .parent()
        .remove();
  });
});
