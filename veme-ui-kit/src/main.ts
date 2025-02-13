import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';

  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter([])
    ]
  }).catch(err => console.error(err));