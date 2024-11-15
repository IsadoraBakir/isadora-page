import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public menuItems = ['Tecnologias', 'Experiências', 'Contato'];
  public logoNav = [
    {
      link: 'https://github.com/IsadoraBakir',
      src: 'assets/images/github.svg',
      alt: 'github',
    },
    {
      link: 'https://www.linkedin.com/in/isadora-bakir-de-santana-74b074160/',
      src: 'assets/images/linkedin.svg',
      alt: 'linkedin',
    },
  ];
}
