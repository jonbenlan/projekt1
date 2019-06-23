import Datastore from 'nedb-promise'

export class Note {
    constructor(createDate, title, text, importance, dueDate) {
        // this.id = id;
        this.createDate = createDate;
        this.title      = title;
        this.text       = text;
        this.importance = importance;
        this.dueDate    = dueDate;
        // this.finishDate = '';
    }
}
// export class OrderStore {
//     constructor(db) {
//         this.db = db || new Datastore({filename: './data/orders.db', autoload: true});
//     }

//     async add(pizzaName) {
//         let order = new Order(pizzaName, orderedBy);
//         return await this.db.insert(order);
//     }

//     async delete(id, currentUser) {
//         await this.db.update({_id: id, orderedBy: currentUser}, {$set: {"state": "DELETED"}});
//         return await this.get(id);
//     }

//     async get(id, currentUser) {
//         return await this.db.findOne({_id: id, orderedBy : currentUser});
//     }

//     async all(currentUser) {
//         return await this.db.cfind({orderedBy : currentUser}).sort({ orderDate: -1 }).exec();
//     }
// }

export class NoteStore {
    constructor(db) {
        this.db = db || new Datastore({filename: './data/notes.db', autoload: true});
    }

    async add(createDate, title, text, importance, dueDate) {
        let note = new Note(createDate, title, text, importance, dueDate);
        return await this.db.insert(note);
    }

    async get(id) {
        
        return await this.db.findOne({_id: id});
    }
    
    async update(id, createDate, title, text, importance, dueDate) {
        let updatedNote = new Note(createDate, title, text, importance, dueDate)
        return await this.db.update({_id: id}, updatedNote, {});
    }

    // async all() {
    //     return await this.db.cfind({}).sort({ orderDate: -1 }).exec();
    // }
    
    async all() {
        return await this.db.cfind({}).sort({ createDate: -1 }).exec();
    }
}

export const noteStore = new NoteStore();
