import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from './aluno.model';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos-editar',
  templateUrl: './alunos-editar.component.html',
  styleUrls: ['./alunos-editar.component.css']
})
export class AlunosEditarComponent implements OnInit {


  aluno: Aluno = new Aluno();

  constructor(private alunoservice: AlunoService,
    private router: Router,
    private rotaAtiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAluno(this.rotaAtiva.snapshot.paramMap.get('id'));
  }

  getAluno(id) {
    this.alunoservice.getAluno(id).subscribe(
      dado => {
        this.aluno = dado;
        console.log(dado);
      },
      error => {
        console.log(error);
      }
    )
  }

  atualizar() {
    this.alunoservice.updateAluno(this.aluno.idaluno, this.aluno)
    .subscribe(dado => {
        this.alunoservice.openSnackBar('Aluno atualizado !');
        this.router.navigate(['/alunos']);
        console.log(dado);
      },
      error => {
        console.log(error);

      })
  }

  cancelar() {
    this.router.navigate(['/alunos']);
  }
}