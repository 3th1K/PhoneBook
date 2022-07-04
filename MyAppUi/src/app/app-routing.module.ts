import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { GetContactsComponent } from './get-contacts/get-contacts.component';
import { GetContactComponent } from './get-contact/get-contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { FavouriteContactsComponent } from './favourite-contacts/favourite-contacts.component';
import { GetGroupComponent } from './get-group/get-group.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomePageComponent},
  {path: 'get-contacts', component: GetContactsComponent},
  {path: 'get-contact', component: GetContactComponent},
  {path: 'get-group', component: GetGroupComponent},
  {path: 'edit-contact', component: EditContactComponent},
  {path: 'favourite-contacts', component: FavouriteContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
