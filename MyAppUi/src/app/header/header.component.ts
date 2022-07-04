import { Component, OnInit } from '@angular/core';
import { Group } from '../classes/group';
import { Contact } from '../classes/contact';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _sharedService:SharedService) { }

  groups: Group[];
  contacts:Contact[] = []
  contactsFound:Contact[] = [];
  searchedName:string = '';
  groupsLoaded:boolean = false;

  ngOnInit(): void {
    this.groupsLoaded = false;
    this._sharedService.getGroups().subscribe(res=>{
      if(res)
        this.groupsLoaded = true;
      this.groups = res;
    });
    this._sharedService.getContacts().subscribe(res=>{
      this.contacts = res;
    });
  }
  

  foundMatches(){
    this.contactsFound=[];
    this.contacts.forEach(contact => {
      if(contact.Name.toLowerCase().includes(this.searchedName.toLowerCase()))
        this.contactsFound.push(contact);
    });
  }

}
