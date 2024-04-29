import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { NgModel } from '@angular/forms';
import { routes } from './app.routes';
import { NgForm } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    importProvidersFrom(NgModel),
    importProvidersFrom(NgForm)
  ]
};