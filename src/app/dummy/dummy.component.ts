import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css'],
})
export class DummyComponent implements OnInit {
  name = "Poop"
  counter = 0

  constructor() { }

  ngOnInit(): void {
  }

  onInput(event: any) {
    console.log(event.target.value)
    this.name = event.target.value
  }
  increase() {
    this.counter = this.counter + 1
  }
  decrease() {
    if (this.counter < 1) return;
    this.counter = this.counter - 1
  }

}
