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

  constructor(private http: HttpClient) { }

  public getContact(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.API, { headers: { 'Authorization': 'whatever-you-want' }})
  }

  public includeContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.API, contact, { headers: { 'Authorization': 'whatever-you-want' }});
  }

  public searchByID(id: string) {
    return this.http.get<Contact>(`${this.API}/${id}`).pipe(take(1));
  }
}
