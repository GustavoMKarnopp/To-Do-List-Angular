import { Component, DoCheck } from '@angular/core';

//INTERFACE
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  //TODO: ARRAY QUE RECEBE OS VALORES.
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor(){}

  //TODO: TODA A VEZ QUE OCORRER UMA MUDANÇA EM MEU COMPONENTE ESSE LIFE CIRCLE HOOK IRÁ CHAMAR E INFORMAR.
  ngDoCheck(): void {
    this.setLocalStorage()
  }

  //TODO: SETA OS VALORES DENTRO DO ARRAY ENTIANDO E TIPANDO.
  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  //TODO: DELETA UM ITEM POR VEZ DA LISTA.
  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1)
  };

  //TODO: DELETA TODOS OS ITEMS DA LISTA.
  public deleteAllTaskList(){
    this.taskList = []
  }

  //TODO: VALIDA SE O USER QUER DEIXAR O INPUT EM BRANCO DANDO A OPÇÃO DE DELETAR CASO CONTRARIO ELE DEVER PREENCHER O INPUT.
  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja deletar?");
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked)); //TODO: ADICIONA O ITEM QUE ESTIVER CHECKADO NA ULTIMA POSIÇÃO DO ARRAY.
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }

}
