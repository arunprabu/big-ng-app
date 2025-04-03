import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <footer>
      <hr>
      <p class="text-center copyright">
        Copyright 2025 | Arun 
      </p>
    </footer>
  `,
  styles: `
    .copyright {
      color: gray;
    }
  `
})
export class FooterComponent {

  profileName = "Arun";

}
