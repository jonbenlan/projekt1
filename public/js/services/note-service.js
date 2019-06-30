import { httpService } from './http-service.js'

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

    async getNotes(filter='') {

        return await httpService.ajax("GET", `/notes/${filter}`, undefined);
    
    }
    

    async getNote(id) {
    
        return await httpService.ajax("GET", `/notes/${id}`, undefined);
    
    }

    async compareNotes(orderOption) {
    
        return (n1, n2) => {
    
            return n1[orderOption] - n2[orderOption];
    
        }
    
    }
    
    async sortNotes(notesData, orderOption) {
      
        this.notes = await notesData;
    
        return this.notes.sort(await this.compareNotes(orderOption));

    }

}