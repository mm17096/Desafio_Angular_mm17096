import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DownComponent } from './comp_down/down/down.component';
import { TopComponent } from './comp_top/top/top.component';
import { RightComponent } from './comp_right/right/right.component';
import { LeftComponent } from './comp_left/left/left.component';

@NgModule({
  declarations: [
    AppComponent,
    DownComponent,
    TopComponent,
    RightComponent,
    LeftComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
