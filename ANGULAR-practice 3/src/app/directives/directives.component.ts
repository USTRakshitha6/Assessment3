import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition= false;
  users =[{ name:'rakshitha',
          city: 'mysore',
          id:111
},
        { name:'adarsh',
          city: 'coorg',
          id:222
           },
           { name:'artha',
          city: 'bangalore',
          id:333
            },
        ]

  constructor() { }
  removeUser(user){
    let index = this.users.indexOf(user);
    this.users.splice(index, 1,);
    this.condition = true;
  }


  ngOnInit() {
  }

}
