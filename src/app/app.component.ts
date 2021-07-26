import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //app comp. ini neerede kullanmak istiyorsun, app comp, ini çağırmak için gerekli etiket
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'] //app root çağırıldığında index.html sayfasında bu iki oge çalışacak
})
export class AppComponent {
  title = 'todoApp';
}
