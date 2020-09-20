import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { AppBootstrapModule } from './modules/app-bootstrap/app-bootstrap.module';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ArenaComponent } from './components/arena/arena.component';
import { ContactComponent } from './components/contact/contact.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { BotInfoComponent } from './components/bot-info/bot-info.component'
@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    FooterComponent,
    HomepageComponent,
    ArenaComponent,
    ContactComponent,
    WelcomeComponent,
    BotInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppBootstrapModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
