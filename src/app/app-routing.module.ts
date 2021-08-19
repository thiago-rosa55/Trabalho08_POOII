import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CursosComponent } from './curso/cursos.component';
import { CursoNovoComponent } from './curso/curso-novo.component';
import { CursoEditarComponent } from './curso/curso-editar.component';
import { AlunosComponent } from './component/alunos/alunos.component';
import { AlunosNovoComponent } from './component/alunos/alunos-novo.component';
import { AlunosEditarComponent } from './component/alunos/alunos-editar.component';

const routes: Routes = [
  { path: "",
    component: HomeComponent
  },
  {
    path: "cursos",
    component: CursosComponent
  },
  {
    path: "curso-novo",
    component: CursoNovoComponent
  },
  {
    path: "curso-editar/:id",
    component: CursoEditarComponent,
    pathMatch: 'full'
  },
  {
    path:"alunos",
    component: AlunosComponent
  },
  {
    path:"alunos-novo",
    component: AlunosNovoComponent
  },
  {
    path:"alunos-editar/:id",
    component: AlunosEditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
