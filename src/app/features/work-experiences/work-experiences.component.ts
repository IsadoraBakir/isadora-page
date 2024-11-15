import { Component } from '@angular/core';

@Component({
  selector: 'app-work-experiences',
  standalone: false,
  templateUrl: './work-experiences.component.html',
  styleUrl: './work-experiences.component.scss',
})
export class WorkExperiencesComponent {
  public workXpItems = [
    {
      date: 'out/2024',
      company: 'Thomson Reuters',
      text: 'Atuei como desenvolvedora front-end na plataforma Onvio (Domínio), focada em soluções para contadores. Utilizei principalmente Angular, com forte uso da biblioteca RxJS, além de JavaScript, TypeScript, CSS e HTML para o desenvolvimento de novas funcionalidades e otimização da aplicação. Também fui responsável por criar testes unitários utilizando Jest, garantindo a robustez e confiabilidade do código. Trabalhei em um ambiente ágil, participando de cerimônias semanais e utilizando Azure e GitHub para o controle de versão, assegurando um fluxo contínuo de desenvolvimento e entregas colaborativas.',
    },
    {
      date: 'out/2021',
      company: 'B4A - Beauty For All',
      text: 'Atuo no desenvolvimento de novas funcionalidades e na manutenção da plataforma Glambox, focada no setor de beleza. Utilizo tecnologias como HTML, CSS, JavaScript (com Angular) e TypeScript para entregar soluções escaláveis e inovadoras. Além do desenvolvimento, colaboro em um ambiente ágil, participando de cerimônias semanais, como plannings e dailies, utilizando ferramentas como Jira e Monday para gerenciamento de tarefas. O controle de versão é realizado via GitHub, garantindo a organização e qualidade das entregas em equipe.',
    },
    {
      date: 'out/2020',
      company: 'NTT DATA',
      text: 'Atuei na modernização do sistema legado do IBPJ Santander (Internet Banking de Pessoa Jurídica), desenvolvendo novas funcionalidades e interfaces com foco em melhorar a experiência do usuário. Utilizei tecnologias como HTML, CSS, JavaScript (com Angular), TypeScript, além de realizar testes unitários com Jasmine e Karma para garantir a qualidade do código. Fui responsável pela análise prévia do desenvolvimento, identificando requisitos e definindo os recursos necessários para a implementação eficaz das soluções. O controle de versão foi gerenciado por meio do GitLab, assegurando a colaboração contínua com a equipe e a integridade dos projetos.',
    },
    {
      date: 'fev/2020',
      company: 'SCC4 Soluções para Logística',
      text: 'Atuei no desenvolvimento de aplicações web e mobile, contribuindo para a criação de sites e sistemas utilizando tecnologias como HTML, CSS, JavaScript (com Angular), TypeScript, Java (Spring Boot), MySQL, Android Studio e o Ionic Framework. Também fui responsável pelo design e prototipagem de interfaces para diversas plataformas, incluindo desktop, mobile, tablets, TVs e painéis digitais, utilizando Figma para garantir uma excelente experiência do usuário. Durante o projeto, participei ativamente do controle de versão com GitLab e Sourcetree, colaborando com equipes multidisciplinares para entregar soluções escaláveis e eficientes.',
    },
  ];
}
