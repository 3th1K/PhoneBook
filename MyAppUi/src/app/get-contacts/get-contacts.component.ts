import { Component, OnInit} from '@angular/core';

import { Contact } from '../classes/contact';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-get-contacts',
  templateUrl: './get-contacts.component.html',
  styleUrls: ['./get-contacts.component.css']
})

export class GetContactsComponent implements OnInit {

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
    this._sharedService.getContacts().subscribe((data)=>{
      if(data)
        this.dataLoaded = true;
      this.contacts = data;
    });
  }

}
