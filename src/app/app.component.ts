import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  isDone = true;
  isFirst = true;

  logTitle(): void {
    //this.title = this.title + ' x';
    console.log(this.title);
  }
}
