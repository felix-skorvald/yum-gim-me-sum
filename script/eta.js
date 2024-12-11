const etaTime = document.querySelector("#eta-time");
const etaOrderId = document.querySelector("#eta-order-id");

let orderID = "";

export function renderEta(order) {
    const etaDate = new Date(order.order.eta);
    const timeStamp = new Date(order.order.timestamp);

    orderID = order.order.id;

    let timeLeft = etaDate - timeStamp;

    console.log(etaDate);
    console.log(timeStamp);
    console.log(orderID);
    etaTime.innerText = "ETA " + Math.floor(timeLeft / (1000 * 60)) + " MIN";
    etaOrderId.innerText = "#" + order.order.id.toUpperCase();
}
