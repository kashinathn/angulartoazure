import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CountryComponent } from './country/country.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: 'users', component: UserComponent },
  { path: 'countries', component: CountryComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
