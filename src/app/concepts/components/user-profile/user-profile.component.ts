import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">First Name: {{firstName}}</h5>
        <h6 class="card-subtitle mb-2 
          text-body-secondary">Last Name: {{lastName}} </h6>
        <p class="card-text">City: {{city}} </p>
      </div>
    </div>
  `,
  styles: ``
})
export class UserProfileComponent {
  // 1. Lets create custom property 
  // 1.1 create a variable 
  // 1.2 and make it a custom property 
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() city = '';
}
