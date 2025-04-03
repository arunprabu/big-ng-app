import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  template: `
    <section class="py-5 text-center container">
      <div class="row py-lg-5">
        <div class="col-lg-6 col-md-8 mx-auto">
          <h1 class="fw-light">My Big ng App</h1>
          <p class="lead text-body-secondary">Building an enterprise style app in a training session!</p>
          <p>
            <a routerLink="/employee-manager" class="btn btn-primary my-2 me-2">Manage Employees</a>
            <a routerLink="/concepts" class="btn btn-secondary my-2">Learn Concepts</a>
          </p>
        </div>
      </div>
    </section>
  `,
  styles: `
  `
})
export class HomeComponent {

}
