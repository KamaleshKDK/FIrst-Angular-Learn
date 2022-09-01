import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name: string = "Kamalesh";
  age: number = 22;
  native: string = "Salem";

  ChangeName() {
    this.name = "Simtaangaran Kamalesh"
  }

  nameChange(event: Event) {
    this.name = (<HTMLInputElement>event.target).value;

  }
}
