import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { ReportsComponent } from '../reports/reports.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-concepts',
  standalone: true,
  imports: [FormsModule,
     UserProfileComponent, ReportsComponent,
    CommonModule],
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

  // custom event binding
  reportDetailsReceivedFromChild: any;

  // For Custom Property Binding 
  profile = {
    firstName: "Steve",
    lastName: "Smith",
    city: "Sydney"
  }

  // for directive 
  isLoggedIn = true;
  skills = ["HTML", "CSS", "JS", "TS", "Angular" ];


  // event binding 
  handleClickMe(event: any) {
    event.target.innerText = "Clicked";
    // TODO: learn about disabling the button on click
  }

  // Step 6 of Custom event binding 
  handleReportSuccess(event: any) { // receiving the data from child comp
    console.log("custom event handled");
    console.log(event);
    this.reportDetailsReceivedFromChild = event;
  }

}
