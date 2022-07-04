import { Component, OnInit } from '@angular/core';
import { Contact } from '../classes/contact';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-favourite-contacts',
  templateUrl: './favourite-contacts.component.html',
  styleUrls: ['./favourite-contacts.component.css']
})
export class FavouriteContactsComponent implements OnInit {

  constructor(private _sharedService:SharedService) { }

  contacts:Contact[] = [];
  dataLoaded:boolean = false;

  ngOnInit(): void {
    this.initializeContacts();
  }

  removeContact(id:number){
    this._sharedService.deleteContact(id).subscribe(()=>{this.initializeContacts();});
  }

  initializeContacts(){
    this.dataLoaded = false;
    this._sharedService.getFavouriteContacts().subscribe((data)=>{
      if(data)
        this.dataLoaded = true;
      this.contacts = data;
    });
  }

  removeFromFavourites(id:number){
    this._sharedService.getContact(id).subscribe(contact=>{
      contact.Fevourite=false;
      this._sharedService.updateContact(id, contact).subscribe(()=>{this.initializeContacts();});
    })
  }

}
