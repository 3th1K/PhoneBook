import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { Contact } from '../classes/contact';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styleUrls: ['./get-contact.component.css']
})
export class GetContactComponent implements OnInit {

  constructor(private _sharedService:SharedService, private _route:ActivatedRoute, private router:Router) {}
  id: any;
  contact: Contact = new Contact();
  ngOnInit(): void {
    this._route.queryParamMap.subscribe(params=>{
      this.id = params.get('id');
      this.initializeContact();
    });
    
  }

  initializeContact(){
    this._sharedService.getContact(this.id).subscribe(data=>{
      this.contact = data;
    });
  }

  toggleFavourite(){
    this.contact.Fevourite=!this.contact.Fevourite;
    console.log(this.contact.Fevourite)
    this._sharedService.updateContact(this.id, this.contact).subscribe(()=>{this.initializeContact();});
  }

}
