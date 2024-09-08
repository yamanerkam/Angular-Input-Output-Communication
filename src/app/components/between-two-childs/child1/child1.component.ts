import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  ngOnInit(): void {
    this.dataEvent.emit({msg:"child 1 says hi! msg"})
  }
  @Output() dataEvent: EventEmitter <any> = new EventEmitter();
  

}
