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
        // console.log(res.json((await noteStore.all())));
        res.json((await noteStore.all(req) || []));
    };

    async createNote(req, res) {
        res.json(await noteStore.add(
            req.body.createDate,
            req.body.title,
            req.body.text,
            req.body.importance,
            req.body.dueDate
        ));
    };


    async showNote(req, res) {
        res.json(await noteStore.get(req.params.id));
    };

}

export const notesController = new NotesController();