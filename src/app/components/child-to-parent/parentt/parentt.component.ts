import { Component } from '@angular/core';

@Component({
  selector: 'app-parentt',
  templateUrl: './parentt.component.html',
  styleUrls: ['./parentt.component.css']
})
export class ParenttComponent {
  newMessage:any;
someFunction(obj:any){
  console.log(obj)
  this.newMessage = obj.msg
}


}
