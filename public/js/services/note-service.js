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
    async createNote(createDate, title, text, importance, dueDate, finishedDate) {
        return await httpService.ajax("POST", "/notes/", { 
            createDate: createDate,
            title: title,
            text: text,
            importance: importance,
            dueDate: dueDate,
            finishedDate: finishedDate
        });
    }

    async updateNote(id, createDate, title, text, importance, dueDate, finishedDate) {
        return await httpService.ajax("POST", `/notes/${id}`, {
            _id: id,
            createDate: createDate,
            title: title,
            text: text,
            importance: importance,
            dueDate: dueDate,
            finishedDate: finishedDate
        });
    }
    

    async getNotes() {
        return await httpService.ajax("GET", "/notes/", undefined);
    }

    async getUnfinished() {
        return await httpService.ajax("GET", "/notes/unfinished", undefined);
    }

    async getNote(id) {
        return await httpService.ajax("GET", `/notes/${id}`, undefined);
    }

}

// export const noteService = new NoteService();