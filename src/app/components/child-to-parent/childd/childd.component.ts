import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childd',
  templateUrl: './childd.component.html',
  styleUrls: ['./childd.component.css']
})
export class ChilddComponent implements OnInit{
 ngOnInit(): void {
  this.dataEvent.emit({msg:"helloooo"})
 }

 @Output() dataEvent : EventEmitter <any> = new EventEmitter();
}
