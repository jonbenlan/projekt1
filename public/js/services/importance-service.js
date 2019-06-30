export class importanceService {

    constructor() {

        this.importanceContainer = document.querySelector('.js-importance-listener');
        this.importanceInputs = this.importanceContainer.querySelectorAll("input[name='importance']");
        this.importance = document.getElementsByTagName('input:checked').value;

    }

    highlight(selected) {    

        Array.from(this.importanceInputs).forEach((item, index) => {

            item.closest(".note-content-input-group").classList.toggle('highlited', index < selected);

        });
        
    }
    
}