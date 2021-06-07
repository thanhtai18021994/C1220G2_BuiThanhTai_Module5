import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './main-content/header/header.component';
import { MainComponent } from './main-content/main/main.component';
import { CreateComponent } from './main-content/main/customers/create/create.component';
import { HomeComponent } from './main-content/main/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainContentComponent,
    HeaderComponent,
    MainComponent,
    CreateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
