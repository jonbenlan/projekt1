class Bootstrapper {
    static start() {
        const notesData = new GetNotesData();
        new ControllerOverview(notesData).notesStart;
    }
}

document.addEventListener('DOMContentLoaded', Bootstrapper.start);
