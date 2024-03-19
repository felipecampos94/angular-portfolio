import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Desenvolvedor Java',
        p: 'CODESCRIPT | Abr 2022 - Set 2023',
      },
      text: '<p>Levantamento de requisitos e diagramas UML. Desenvolvimento de APIs e microsserviços utilizando a linguagem Java, com Spring Boot, Spring Data JPA, Spring Security, Maven, migrations com Flyway, base de dados PostgreSQL, documentação com Swagger UI, versionamento de código com GitHub e metodologias ágeis (Scrum, Kanban)..</p>',
    },
    {
      summary: {
        strong: 'Desenvolvedor de Sistemas',
        p: 'Fundação Universidade de Passo Fundo | Ago 2020 - Mar 2022',
      },
      text: '<p>Desenvolvimento de aplicações utilizando a linguagem Java, com os frameworks JSF e Primefaces, Mapeamento Objeto-Relacional (ORM) com EclipseLink/JPA, base de dados PostgreSQL, geração de relatórios com JasperReports, versionamento de código com GitLab e metodologias ágeis (Scrum, Kanban).</p>',
    },
    {
      summary: {
        strong: 'Bolsista de Extensão',
        p: 'Splora Tecnologia | Abr 2019 - Ago 2020',
      },
      text: '<p>Auxílio na elaboração da documentação de software, descrição dos Requisitos Funcionais, Requisitos Não-Funcionais e Regras de Negócio, detalhamento de Casos de Uso e diagramas UML. Desenvolvimento de uma aplicação utilizando a linguagem Java, com os frameworks JSF e Primefaces, Mapeamento Objeto-Relacional (ORM) com EclipseLink/JPA e base de dados PostgreSQL, versionamento de código com SVN.</p>',
    },
  ]);
}
