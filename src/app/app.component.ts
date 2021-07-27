import { Component } from '@angular/core';
import { Model3, ToDo } from './model3';


@Component({
  selector: 'app-root', //app comp. ini neerede kullanmak istiyorsun, app comp, ini çağırmak için gerekli etiket
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] //app root çağırıldığında index.html sayfasında bu iki oge çalışacak
})
export class AppComponent {
model3 = new Model3();
isDisplay =false;

getName(){
  return this.model3.user;
}
getItems(){
  if(this.isDisplay){
    return this.model3.items;
  }
  return this.model3.items.filter((item: { action: any; }) => !item.action);
}
addItem(value: any){
if(value!=" "){
this.model3.items.push(new ToDo(value,false) );
}
}

}
