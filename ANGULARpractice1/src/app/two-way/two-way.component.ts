import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
  styleUrls: ['./two-way.component.css']
})
export class TwoWayComponent implements OnInit {
  ngOnInit(): void {
    console.log('noOnInit implemented')
  }

  backgroundColor = 'red';

  constructor() {
    console.log('constoructor running 1st after oninit execute')
   }

  buttonEvent(data){
console.log(data);
  }
  // changecolor(){
  //  if( this.backgroundColor==='red'){
  //   this.backgroundColor='blue';
  //  }else{
  //   this.backgroundColor='red';
  //  }
  // }
  changecolor(data){
  this.backgroundColor=data;
   }

   
}
