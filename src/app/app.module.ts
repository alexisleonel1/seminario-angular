import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { DrumListComponent } from './drum-list/drum-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SubMenuComponent,
    DrumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
