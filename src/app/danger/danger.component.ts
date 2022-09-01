import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-danger',
  template: `<p>This is Warning.You are in Danger!</p>`,
  styles: [`
  p{
  border: 4px solid rgb(255, 86, 114);
  background-color: pink;
  padding:20px
  }
  `]
})
export class DangerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
