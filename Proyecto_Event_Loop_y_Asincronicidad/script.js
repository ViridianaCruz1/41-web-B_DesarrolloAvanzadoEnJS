const orderList = document.getElementById("orderList");
const addOrderBtn = document.getElementById("addOrderBtn");

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener("click", () => {
  const order = { id: orderId++, status: "En Proceso" };
  addOrder(order);
  processOrder(order);
});

function addOrder(order) {
  const listItem = document.createElement("li");
  listItem.id = `order-${order.id}`;
  listItem.textContent = `Pedido #${order.id}: ${order.status}`;
  orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
  const listItem = document.getElementById(`order-${order.id}`);
  if (listItem) {
    listItem.textContent = `Pedido #${order.id}: ${status}`;
  }
}

function prepareOrder() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
}

async function processOrder(order) {
  updateOrderStatus(order, "En Proceso");

  await prepareOrder();

  order.status = "Completado";

  updateOrderStatus(order, order.status);
  // TODO: Simular la preparación del pedido usando setTimeout y Promise
  // TODO: Actualizar el estado del pedido a "Completado"
}
