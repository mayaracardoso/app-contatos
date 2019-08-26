import { Contact } from './models/contact.model';
import { ContactService } from './services/contact.service';
import { Component } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-contatos';
  contacts$: Observable<Contact[]>;
  contacts: Contact[];
  showFormAdd = false;
  person = new Contact();
  teste: string;

  constructor(private service: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() {
    this.service.getContact().subscribe((res) => {
      this.contacts = res;
    });
  }

  addContact() {
    this.showFormAdd = true;
  }

  saveContact() {
    this.service.includeContact(this.person);
  }
}
