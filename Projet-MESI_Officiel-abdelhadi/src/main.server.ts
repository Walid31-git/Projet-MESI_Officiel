// import { bootstrapApplication } from '@angular/platform-browser';

// import { config } from './app/app.config.server';//
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { config } from './app/app.config.server';

import { AppComponent } from './app/app.component'; // Ensure this is your root component

// Bootstrap the application with server-side rendering
export default function bootstrap() {
  return bootstrapApplication(AppComponent, {
    providers: [
      provideServerRendering(),
      ...config.providers // Ensure your app's config is properly imported
    ],
  });
}







