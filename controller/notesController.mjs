import {noteStore} from '../services/noteStore.mjs'


export class NotesController {

    async getNotes(req, res) {
        res.json((await noteStore.all() || []));
    };

    async getUnfinished(req, res) {
        const filter = { finishedDate: '' };
        res.json((await noteStore.all(filter) || []));
    };

    async createNote(req, res) {
        res.json(await noteStore.add(
            req.body.createDate,
            req.body.title,
            req.body.text,
            req.body.importance,
            req.body.dueDate,
            req.body.finishedDate
        ));
    };
    
    async updateNote(req, res) {
        res.json(await noteStore.update(
            req.body._id,
            req.body.createDate,           
            req.body.title,
            req.body.text,
            req.body.importance,
            req.body.dueDate,
            req.body.finishedDate
        ));
    };


    async showNote(req, res) {
        res.json(await noteStore.get(req.params.id));
    };

}

export const notesController = new NotesController();