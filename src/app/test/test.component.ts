import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  test = 'test';
  changebool = true;
  constructor() {
   setTimeout(() => {
     this.changebool = false;
   }, 2000);

   }

  ngOnInit() {
  }
  updateString(event){
   this.test = event.target.value;
  }


}
