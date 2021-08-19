import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from './aluno.model';
import { AlunoService } from './aluno.service';

@Component({
  selector: 'app-alunos-novo',
  templateUrl: './alunos-novo.component.html',
  styleUrls: ['./alunos-novo.component.css']
})
export class AlunosNovoComponent implements OnInit {

  aluno: Aluno = new Aluno();

  constructor(
    private alunoService: AlunoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar() {
    this.alunoService.createAluno(this.aluno)
    .subscribe(
      dado => {
        console.log(dado)
        this.alunoService.openSnackBar('aluno criado com sucesso!');
        this.router.navigate(['/alunos']);
      }
    )
  }

  cancelar() {
this.router.navigate(['/alunos']);
  }

}

