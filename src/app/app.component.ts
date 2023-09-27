import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularApp';
  players = ["Virat","Sachin"];
  message:string="Hello World !"
  inputValue:string="Initial Value";
}