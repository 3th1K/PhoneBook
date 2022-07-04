import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _http:HttpClient) { }
  url = "https://localhost:44348/api";
  
  getContacts(): Observable<any>{
    return this._http.get(this.url+"/contacts");
  }

  getContact(id: number): Observable<any>{
    return this._http.get(this.url+"/contacts/"+id); 
  }

  getFavouriteContacts():Observable<any>{
    return this._http.get(this.url+"/contacts/favourites");
  }

  getGroupContacts(id: number): Observable<any>{
    return this._http.get(this.url+"/contacts/group/"+id); 
  }

  getGroups(): Observable<any>{
    return this._http.get(this.url+"/groups");
  }

  getGroup(id: number): Observable<any>{
    return this._http.get(this.url+"/groups/"+id); 
  }


  createContact(contact:any): Observable<any>{
    return this._http.post(this.url+"/contacts", contact);
  }

  updateContact(id:number, contact:any): Observable<any>{
    return this._http.put(this.url+"/contacts/"+id, contact);
  }

  deleteContact(id:number): Observable<any>{
    return this._http.delete(this.url+"/contacts/"+id);
  }


}
