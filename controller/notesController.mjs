import {noteStore} from '../services/noteStore.mjs'
// import {SecurityUtil} from '../utils/security'

// export class OrdersController {

//     async getOrders(req, res) {
//         res.json((await noteStore.all(req) || []))
//     };

//     async createPizza(req, res) {
//         res.json(await orderStore.add(req.body.name));
//     };

//     async showOrder(req, res) {
//         res.json(await orderStore.get(req.params.id, SecurityUtil.currentUser(req)));
//     };

//     async deleteOrder(req, res) {
//         res.json(await orderStore.delete(req.params.id, SecurityUtil.currentUser(req)));
//     };
// }

export class NotesController {

    async getNotes(req, res) {
        res.json((await noteStore.all(req) || []))
    };

    async createNote(req, res) {
        res.json(await noteStore.add({
            createDate: req.body.createDate,
            title: req.body.title,
            text: req.body.text,
            importance: req.body.importance,
            dueDate: req.body.dueDate
        }));
    };

    async showNote(req, res) {
        res.json(await noteStore.get(req.params.id));
    };

}

export const notesController = new NotesController();