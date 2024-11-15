import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss',
})
export class ContactsComponent {
  public email = 'isadorabakir@gmail.com';
  public contactsItems = [
    {
      link: 'https://github.com/IsadoraBakir',
      src: 'assets/images/github.svg',
      alt: 'github',
      user: 'IsadoraBakir',
    },
    {
      link: 'https://www.linkedin.com/in/isadora-bakir-de-santana-74b074160/',
      src: 'assets/images/linkedin.svg',
      alt: 'linkedin',
      user: 'Isadora Bakir de Santana',
    },
  ];
}
