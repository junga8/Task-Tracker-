import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task!: Task;
  //since we have this onDeleteTask output we have to go to the parent component which is Task 
  //and 
  @Output() onDeleteTask : EventEmitter<Task>  = new EventEmitter()
  @Output() onToggleReminder : EventEmitter<Task>  = new EventEmitter()

  faTimes = faTimes; 

  constructor() { }

  ngOnInit(): void {
  }

  //we are basically definining the methods that are in our html file 
  onDelete(task: Task){
    //this is how u post data to parent 
    this.onDeleteTask.emit(task);
  }

  //whenever we emuit somthing we have to go to the parent component and handle our business 
  onToggle(task : Task){
    this.onToggleReminder.emit(task);
  } 

}
