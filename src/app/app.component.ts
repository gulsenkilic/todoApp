import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //app comp. ini neerede kullanmak istiyorsun, app comp, ini çağırmak için gerekli etiket
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] //app root çağırıldığında index.html sayfasında bu iki oge çalışacak
})
export class AppComponent {
  user='Cinar';
  items= [
    {decription: "Kahvaltı", action:"No"},
    {decription: "Sinema", action:"No"},
    {decription: "Ders", action:"No"},
    {decription: "Spor", action:"No"}
  ];
}
