import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.css']
})
export class AttributeDirectivesComponent implements OnInit {
issuccess=true;
classesArray=["text-danger","bg-dark","mt-5"]
my=["bg-dark","text-danger"]
  constructor() { }

  ngOnInit() {
    // setTimeout(()=>{
    // this.issuccess=false;
    // },5000);
    setInterval(()=>{
      this.issuccess=!this.issuccess;
    },1000)
  }


}
