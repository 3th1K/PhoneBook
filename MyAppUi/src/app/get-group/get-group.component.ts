import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../classes/contact';
import { Group } from '../classes/group';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-get-group',
  templateUrl: './get-group.component.html',
  styleUrls: ['./get-group.component.css']
})
export class GetGroupComponent implements OnInit {

  constructor(private _sharedService:SharedService, private _route:ActivatedRoute) { }
  
  //id:any;
  group: Group = new Group();
  contacts: Contact[] = [];
  
  ngOnInit(): void {
    this._route.queryParams.subscribe(routeParams=>{
      this.initializeGroup(routeParams['id']);
    });
    
  }

  initializeGroup(id:number){
    this._sharedService.getGroup(id).subscribe(res=>{
      this.group = res;
      this._sharedService.getGroupContacts(id).subscribe((res)=>{
        this.contacts = res;
      });
    });
  }

}
