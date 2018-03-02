import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormControlsModule } from './form-controls/form-controls.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormControlsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
