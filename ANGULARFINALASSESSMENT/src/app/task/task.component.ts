import { Component, OnInit } from '@angular/core';
import { TaskserviceService } from '../taskservice.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
 
  
  constructor(private taskservice:TaskserviceService) {}

    sendData(data :NgForm){
      this.taskservice.dat.push(data.value);
      data.reset();
  
   }

   ngOnInit(): void {
    
  }



  

  }
