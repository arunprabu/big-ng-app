import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

// html, css, ts associated by Decorator
@Component({
  selector: 'app-root', // element selector
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html', // html - must - and only one
  styleUrl: './app.component.css' // css 
})
export class AppComponent {
  // typscript logic
  title = 'big-ng-app';
}
