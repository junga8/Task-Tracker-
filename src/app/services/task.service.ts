import { Injectable } from '@angular/core';
import {Task} from '../Task';
//import { TASKS } from '../mock-task';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks'

  constructor(private http:HttpClient) { }

  getTasks() : Observable<Task[]> {

    //of converts TASKS to observable type this getting things from a files 
    //const tasks =  of(TASKS); 
   // return tasks ; 

   //getting stuff from a fake json server/ backeend 

   return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task : Task): Observable<Task>{

    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);

  }
  //service is where we update our task so surver get's updated 
  updateTaskReminder(task :Task): Observable<Task>{
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions);
  }

  addTask(task :Task) : Observable<Task>{
    return this.http.post<Task>(this.apiUrl, task , httpOptions);

  }

  
}
