export class Note {
    constructor(id, createDate, title, text, importance, dueDate) {
        this.id = id;
        this.createDate = createDate;
        this.finishDate = finishDate;
        this.title      = title;
        this.text       = text;
        this.importance = importance;
        this.dueDate    = dueDate;
        this.finishDate = '';
    }
    toJSON() {
        return {
            id: this.id,
            createDate: this.createDate,
            finishDate: this.finishDate,
            title: this.title,
            text: this.text,
            importance: this.importance,
            dueDate: this.dueDate,
        };
    }

}