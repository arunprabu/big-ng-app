import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [],
  template: `
    <div>
      <h5>Welcome to Report Generation Section</h5>
      <button (click)="handleGenerateReport()">Generate Report</button>
    </div>
  `,
  styles: ``
})
export class ReportsComponent {
  // Step 1: Let's keep the data to be sent to the parent component
  report = {
    id: 13425678,
    message: "Report Generated Successfully!"
  }

  // Step 3: Let's create custom event -- using which we can send the above data
  // Step 3.1 first create an object of type EventEmitter class
  // Step 3.2 then, make it a custom event 
  @Output() reportSuccess: EventEmitter<any> = new EventEmitter();

  // Step 2: setting up event handler to send the above data
  handleGenerateReport() {
    console.log("Generating...");

    // Step 4: after 3 seconds, let's send the data to the parent comp
    setTimeout(() => {
      console.log("sending after 3 sec");
      this.reportSuccess.emit(this.report);
    }, 3000);
  }
}
