import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  name!: string;
  age: number = 22;
  native: string = "Salem";
  text: string = "No name is Here"
  btnDisable: boolean = false;
  ChangeName() {
    this.name = "Simtaangaran Kamalesh"
  }

  // nameChange(event: Event) {
  //   this.name = (<HTMLInputElement>event.target).value;

  // }


  // addName() {
  //   if (this.text = "Your name is " + this.name) {
  //     this.btnDisable = false
  //   }
  //   else {
  //     this.btnDisable = false;
  //   }
  // }

  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {

    this.count--;
  }
}
