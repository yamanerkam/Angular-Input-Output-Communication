import { Component } from '@angular/core';

@Component({
  selector: 'app-parent11',
  templateUrl: './parent11.component.html',
  styleUrls: ['./parent11.component.css']
})
export class Parent11Component {
  someMessageFromChild1:any;
 dataCatch(obj:any){
  console.log(obj)
  this.someMessageFromChild1 = obj.msg
 }
}
