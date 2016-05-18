export class TodoModel {
    id:number;
    title:string;
    completed:boolean;

    constructor (title:string) {
        this.id = Math.floor(Math.random() * 100000);
        this.title = title;
    }
}
