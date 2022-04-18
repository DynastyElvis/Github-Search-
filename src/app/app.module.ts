import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClassComponent } from './class/class.component';
import { FontDirective } from './font.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { LastPipe } from './last.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ClassComponent,
    FontDirective,
    NotFoundComponent,
    LastPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
