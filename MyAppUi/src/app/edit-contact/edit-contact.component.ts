import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Group } from '../classes/group';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {

  id:any; 
  alertMsg:any;
  groups:Group[];

  contactForm=new FormGroup({
    'name': new FormControl<string|null>(null,[Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/), Validators.maxLength(30)]),
    'number': new FormControl<number|null>(null,[Validators.required, Validators.pattern("[0-9]{10}")]),
    'email': new FormControl<string|null>(null,[Validators.email]),
    'address': new FormControl<string|null>(null, [Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    'fevourite': new FormControl<boolean>(false),
    'groupId':new FormControl<number|null>(null)
  });

  constructor(private _sharedService:SharedService, private _route:ActivatedRoute, private _router:Router) { 
  }
  

  ngOnInit(): void {
    this.id = this._route.snapshot.queryParamMap.get('id');
    this._sharedService.getGroups().subscribe(res=>{this.groups = res;});
    if(this.id!=null){
      this._sharedService.getContact(this.id).subscribe((res)=>{
        this.contactForm.patchValue({
          name: res.Name,
          number: res.Number,
          email: res.Email,
          address: res.Address,
          fevourite: res.Fevourite,
          groupId: res.GroupId
        })
      });
    }
  }

  createContact(){
    if(this.contactForm.valid){
      this._sharedService.createContact(this.contactForm.value).subscribe(()=>{
        console.log("created");
        this.contactForm.reset();
        this._router.navigate(['/get-contacts']);
      });
    }
    else{
      console.log("not created");
    }
  }

  editContact(){
    if(this.contactForm.valid){
      this._sharedService.updateContact(this.id, this.contactForm.value).subscribe(()=>{
        console.log("created");
        this.contactForm.reset();
        this._router.navigateByUrl('/get-contact?id='+this.id);
      });
    }
    else{
      console.log("invalid data");
    }
  }

}
