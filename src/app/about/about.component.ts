import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1 i18n="@@pageTitle">About Us</h1>
      <h2 >Let's understand Pipes</h2>

      <div>
        <p>Pipes are used to transform information from one format to another</p>
        <h3>Without any Pipe - Demo</h3>
        <p>{{randomText}}</p>

        <h3>UPPERCASE Pipe - Demo</h3>
        <p>{{randomText | uppercase}}</p>

        <h3>lowercase Pipe - Demo</h3>
        <p>{{randomText | lowercase}}</p>

        <h3>Titlecase Pipe - Demo</h3>
        <p>{{randomText | titlecase}}</p>

        <h3>Without Date Pipe - Demo</h3>
        <p>{{today}}</p>

        <h3>With Date Pipe - Demo</h3>
        <p>{{today | date }}</p>

        <h3>With Date Pipe - Demo</h3>
        <p>{{today | date: 'short' }}</p>

        <h3>With Date Pipe - Demo</h3>
        <p>{{today | date: 'dd-MM-yyyy' }}</p>
      </div>
    </div>
  `,
  styles: ``
})
export class AboutComponent {
  randomText: string = "Hello World";

  today: Date = new Date();
}
