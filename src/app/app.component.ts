import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListComponent } from './list/list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'data-binding-app';
  count:number = 0;
  blShow:boolean = false;
  onButtonClick()
  {
    this.count++;
  }

  myMethod()
  {
    this.blShow = true;
  }
}
