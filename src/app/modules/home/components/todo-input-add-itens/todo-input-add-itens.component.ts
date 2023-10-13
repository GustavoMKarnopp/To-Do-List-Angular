import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emmitItemTaskList = new EventEmitter(); //TODO: CRIA UM DECORADO PARA RECEBER VALORES DE SAIDA (Output) - E TRABALHA COM O EVENTMITTER PARA TRANMITIR O VALOR PARA QUALQUER COMPONENTE.

  public addItemTaskList: string=""; //TODO: CRIA UMA VARIÁVEL PARA RECEBER O VALOR;

  constructor(){}

  ngOnInit(): void {

  }

  public submitItemTaskList(){
    this.addItemTaskList = this.addItemTaskList.trim(); //TODO: O TRIM É RESPONSÁVEL POR REMOVER TODOS OS ESPAÇOS TANTO DA FRENTE QUEANTO DE TRÁS.

    if(this.addItemTaskList){

      this.emmitItemTaskList.emit(this.addItemTaskList);//TODO: EMITE O VALOR PARA DENTRO DA VARIÁVEL.

      this.addItemTaskList = "";//TODO: LIMPA O VALOR DA VARIÁVEL.
    }

  }
}
