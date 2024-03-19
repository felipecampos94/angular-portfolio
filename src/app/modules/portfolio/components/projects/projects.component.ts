import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  //#dialog = inject(MatDialog);
  constructor(private dialog: MatDialog) {}

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/todo.png',
      alt: 'Projeto ToDo List Angular',
      title: 'ToDo List Angular',
      width: '100px',
      height: '51px',
      description:
        '<p>Todo-List é uma aplicação web criada com Angular, utilizando a biblioteca do Angular Material, armazenando os seus registros em Local Storage</p>',
      links: [
        {
          name: 'Conheça',
          href: 'https://todo-list-two-lemon.vercel.app/',
        },
      ],
    },
    {
      src: 'assets/img/projects/help-desk.png',
      alt: 'Projeto Help Desk',
      title: 'Help Desk',
      width: '100px',
      height: '51px',
      description:
        '<p>Esse é um sistema para gerenciamento de chamados simulando um simples Help Desk em Angular 12 e Spring Boot 2</p>',
      links: [
        {
          name: 'Conheça',
          href: 'https://github.com/felipecampos94/help-desk',
        },
      ],
    },
  ]);

  public openDialog(data: IProjects) {
    this.dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS,
    });
  }
}
