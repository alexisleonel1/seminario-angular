import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { DrumListComponent } from './drum-list/drum-list.component';

import { FormsModule } from '@angular/forms';
import { SelecStringComponent } from './selec-string/selec-string.component';
import { InputNumbersComponent } from './input-numbers/input-numbers.component';
import { InputStringsComponent } from './input-strings/input-strings.component';
import { StatusBooleanComponent } from './status-boolean/status-boolean.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SubMenuComponent,
    DrumListComponent,
    SelecStringComponent,
    InputNumbersComponent,
    InputStringsComponent,
    StatusBooleanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
