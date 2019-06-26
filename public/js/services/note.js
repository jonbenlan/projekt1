export class Note {
    constructor(createDate, title, text, importance, dueDate) {
        this.createDate = createDate;
        this.title      = title;
        this.text       = text;
        this.importance = importance;
        this.dueDate    = dueDate;
        // this.finishDate = '';
    }
    toJSON() {
        return {
            id: this.id,
            createDate: this.createDate,
            title: this.title,
            text: this.text,
            importance: this.importance,
            dueDate: this.dueDate,
        };
    }

}