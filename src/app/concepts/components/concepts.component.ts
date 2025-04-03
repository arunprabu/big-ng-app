import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './concepts.component.html',
})
export class ConceptsComponent {
  // keep the data here
  // Interpolation
  appName = "Big Ng App";
  developerProfile = {
    name: "Arun",
    expInYears: 5
  }

  // Property Binding 
  teamSize = 10;

  // two way binding
  courseName = "Angular";

  // event binding 
  handleClickMe(event: any) {
    event.target.innerText = "Clicked";
    // TODO: learn about disabling the button on click
  }

}
