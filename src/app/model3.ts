export class Model3{
    items: any;
    user: string;
     constructor(){
     this.user="gulsen";
     this.items=[
    new ToDo ("Spor", true),
    new ToDo("Kahvaltı", false),
    new ToDo("Odev", false),
    new ToDo("Kitap okumak", false)];
     }
}
export class ToDo{
    description: any;
    action: boolean;
    constructor(description: any, action: boolean){
    this.description=description;
    this.action=action;
    }
}
