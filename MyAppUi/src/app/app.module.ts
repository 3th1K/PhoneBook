import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetContactsComponent } from './get-contacts/get-contacts.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedService } from './services/shared.service';
import {HttpClientModule} from '@angular/common/http';
import { GetContactComponent } from './get-contact/get-contact.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FavouriteContactsComponent } from './favourite-contacts/favourite-contacts.component';
import { GetGroupComponent } from './get-group/get-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    GetContactsComponent,
    HeaderComponent,
    FooterComponent,
    GetContactComponent,
    EditContactComponent,
    FavouriteContactsComponent,
    GetGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
