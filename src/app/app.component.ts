import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HOLA MUNDO';

  onResourceClick(): void {
    alert("Se hizo click ")
    if (this.title == "HOLA MUNDO") {
      this.title = 'BIEVENIDOS A MI PROYECTO';
    } else {
      this.title = "HOLA MUNDO";
    }
  }
}
