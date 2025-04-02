import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// ng app is Bootstrapped with a component - App component 
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
