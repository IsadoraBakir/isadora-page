import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-technologies',
  standalone: false,
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.scss',
})
export class TechnologiesComponent implements OnInit {
  @ViewChild('progressBar') progressBar!: ElementRef<HTMLDivElement>;
  isVisible = false;

  public techItems = [
    {
      name: 'HTML',
      percentage: '100%',
      level: 'Avançado',
    },
    {
      name: 'CSS, Sass & Bootstrap',
      percentage: '100%',
      level: 'Avançado',
    },
    {
      name: 'Angular',
      percentage: '100%',
      level: 'Avançado',
    },
    {
      name: 'Javascript, Typescript',
      percentage: '100%',
      level: 'Avançado',
    },
    {
      name: 'RxJS',
      percentage: '80%',
      level: 'Regular',
    },
    {
      name: 'Acessibilidade',
      percentage: '80%',
      level: 'Regular',
    },
    {
      name: 'UI Design Figma',
      percentage: '80%',
      level: 'Regular',
    },
    {
      name: 'Jasmine, Karma, Jest',
      percentage: '80%',
      level: 'Regular',
    },
    {
      name: 'React',
      percentage: '40%',
      level: 'Iniciante',
    },
  ];

  public addTechItems = [
    'Git',
    'Trabalho em equipe',
    'Rápido aprendizado',
    'Scrum, Kanban',
    'Boa comunicação',
    'Organização do tempo',
    'Feedback',
    'Inglês',
  ];

  ngOnInit() {
    setTimeout(() => this.setupIntersectionObserver(), 0);
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true;
          }
        });
      },
      { threshold: 0.1 },
    );

    if (this.progressBar) {
      observer.observe(this.progressBar.nativeElement);
    }
  }
}
