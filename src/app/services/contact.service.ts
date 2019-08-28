import { Contact } from './../models/contact.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable( {
  providedIn: 'root'
})
export class ContactService {
  private readonly API = 'http://localhost:5001/contacts';
  private readonly headerAPI = { headers: { 'Authorization': 'whatever-you-want' }};

  constructor(private http: HttpClient) { }

  public getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.API, this.headerAPI)
  }

  public includeContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.API, contact, this.headerAPI);
  }

  public searchByName(name: string) {
    return this.http.get<Contact>(`${this.API}/${name}`, this.headerAPI);
  }
}
