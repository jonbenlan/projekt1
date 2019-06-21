import { httpService } from './http-service.js'

// class OrderService {    
//     async createPizza(pizzeName) {
//         return await httpService.ajax("POST", "/orders/", { name: pizzeName });
//     }

//     async getOrders() {
//         return await httpService.ajax("GET", "/orders/", undefined);
//     }

//     async getOrder(id) {
//         return await httpService.ajax("GET", `/orders/${id}`, undefined);
//     }

//     async deleteOrder(id) {
//         return await httpService.ajax("DELETE", `/orders/${id}`, undefined);
//     }
// }

export class NoteService {
    async createNote(createDate, title, text, importance, dueDate) {
        return await httpService.ajax("POST", "/newnote.html", { 
            createDate: createDate,
            title: title,
            text: text,
            importance: importance,
            dueDate: dueDate 
        });
    }

    async getNotes() {
        return await httpService.ajax("GET", "/", undefined);
    }

    async getNote(id) {
        return await httpService.ajax("GET", `/note/${id}`, undefined);
    }

}
