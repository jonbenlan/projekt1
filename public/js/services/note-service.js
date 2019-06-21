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

class NoteService {    
    async createNote(pizzeName) {
        return await httpService.ajax("POST", "/newnote", { name: pizzeName });
    }

    async getNotes() {
        return await httpService.ajax("GET", "/", undefined);
    }

    async getNote(id) {
        return await httpService.ajax("GET", `/note/${id}`, undefined);
    }

}
export const noteService = new NoteService();