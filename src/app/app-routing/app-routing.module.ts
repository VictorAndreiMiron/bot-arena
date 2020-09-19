import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'
import { NavigationMenuComponent } from '../navigation-menu/navigation-menu.component'
import { HomepageComponent }  from '../homepage/homepage.component'
import { ArenaComponent }  from '../arena/arena.component'
import { ContactComponent }  from '../contact/contact.component'
import { AppComponent } from '../app.component'
const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'arena/:id', component: ArenaComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
