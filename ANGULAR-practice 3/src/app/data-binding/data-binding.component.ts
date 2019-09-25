import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  redcolor = true;
  name = 'rakshitha';
  textclass = 'bg-succes text-white';
  paragraphStyle= 'lightblue';

  constructor() {
    setTimeout(()=>{
      this.redcolor = false;
    },5000)
   }


}
