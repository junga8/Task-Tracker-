import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
Observable

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask: boolean = false; 
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask() : void {
    this.showAddTask = !this.showAddTask ; 
    //passing the xurrent showaddtask value in next 
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
