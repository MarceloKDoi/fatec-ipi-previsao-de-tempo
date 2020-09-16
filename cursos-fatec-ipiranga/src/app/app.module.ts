import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FatecLogoComponent } from './fatec-logo/fatec-logo.component';
import { FatecCursosComponent } from './fatec-cursos/fatec-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    FatecLogoComponent,
    FatecCursosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
