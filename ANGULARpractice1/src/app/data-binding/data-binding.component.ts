import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent  {
  redcolor=false;
name ='laxmi';
myclass='form-control';
textclasses='bg-success text-white'
myclasses='bg-danger text-black'
name1='shreeram';
imgURL='https://cdn.pixabay.com/photo/2015/06/25/17/56/people-821624__340.jpg';
// parastyle='blue';
parastyle=true;
padding='50px';
columnspan=2;
  constructor() { 
    setTimeout(()=>{
      this.redcolor=true;
      this.parastyle=false;

    },5000);
  }

  
  }


