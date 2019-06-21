// import { authService } from '../services/auth-service.js'
import { noteService } from '../services/note-service.js'

const noteContainer = document.querySelector("#orderContainer");
const orderRenderer = Handlebars.compile(document.querySelector("#order-template").innerHTML);

const orderId = window.location.hash.substring(1);
if (!(orderId && authService.isLoggedIn())) {
    window.location.replace("./index.html");
}

async function renderOrder() {
    orderContainer.innerHTML = orderRenderer(await noteService.getNotes())
}

// orderContainer.addEventListener("click", async event => {
//     if (event.target.classList.contains("js-delete")) {
//         await orderService.deleteOrder(event.target.dataset.id);
//         renderOrder()
//     }
// });

renderOrder();