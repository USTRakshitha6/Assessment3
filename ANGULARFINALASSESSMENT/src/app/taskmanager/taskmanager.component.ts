import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.css']
})
export class TaskmanagerComponent implements OnInit {


  array: any[] = [];

  constructor(private taskservice:TaskserviceService) {

   
   }

  ngOnInit() {
    this.array = this.taskservice.dat;
    console.log(this.array);
    

    
  }

  delete(i)
  {
    this.array.splice(i,1);
  }

  

}



