import {Component, signal} from '@angular/core';
import {IKnowledge} from "../../interface/IKnowledge.interface";

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento de HTML5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento de CSS3',
    },
    {
      src: 'assets/icons/knowledge/java.svg',
      alt: 'Icone de conhecimento de Java',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento de Angular',
    },
    {
      src: 'assets/icons/knowledge/docker.svg',
      alt: 'Icone de conhecimento de Docker',
    },
    {
      src: 'assets/icons/knowledge/jira.svg',
      alt: 'Icone de conhecimento de Jira',
    },
    {
      src: 'assets/icons/knowledge/trello.svg',
      alt: 'Icone de conhecimento de Trello',
    },
    {
      src: 'assets/icons/knowledge/github.svg',
      alt: 'Icone de conhecimento de GitHub',
    },

  ]);

}
