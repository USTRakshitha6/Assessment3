import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
condition=false;
  users=[{
    id:122,
    name:'laxmi',
    city:'hubli'},
    {
      id:123,
      name:'shree',
      city:'haveri'},
      {
        id:124,
        name:'deepa',
        city:'shiggaon'},
        {
          id:125,
          name:'vinod',
          city:'shimoga'},
          {
            id:126,
            name:'cheatn',
            city:'bengalore'}
    

  ]

  constructor() { }
  removeuser(user){
    let index = this.users.indexOf(user);
    this.users.splice(index,1);
    this.condition=true;
  }
  


  ngOnInit() {
  }

}
