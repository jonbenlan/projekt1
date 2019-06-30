import Datastore from 'nedb-promise'

export class Note {
    constructor(createDate, title, text, importance, dueDate, finishedDate) {
        this.createDate = createDate;
        this.title      = title;
        this.text       = text;
        this.importance = importance;
        this.dueDate    = dueDate;
        this.finishedDate = finishedDate;
    }
}


export class NoteStore {
    constructor(db) {
        this.db = db || new Datastore({filename: './data/notes.db', autoload: true});
    }

    async add(createDate, title, text, importance, dueDate, finishedDate) {
        let note = new Note(createDate, title, text, importance, dueDate, finishedDate);
        return await this.db.insert(note);
    }

    async get(id) {
        return await this.db.findOne({_id: id});
    }
    
    async update(id, createDate, title, text, importance, dueDate, finishedDate) {
        let updatedNote = new Note(createDate, title, text, importance, dueDate,finishedDate);
        return await this.db.update({_id: id}, updatedNote, {});
    }
    
    async all(filter={}) {
        return await this.db.cfind(filter).sort({ createDate: -1 }).exec();
    }
}

export const noteStore = new NoteStore();
