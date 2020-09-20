import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router'

import { ArenaComponent }  from '../../components/arena/arena.component'
import { NavigationMenuComponent } from '../../components/navigation-menu/navigation-menu.component'
import { HomepageComponent }  from '../../components/homepage/homepage.component'
import { ContactComponent }  from '../../components/contact/contact.component'
import { AppComponent } from '../../app.component'
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
