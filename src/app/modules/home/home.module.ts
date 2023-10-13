import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { TodoButonDeleteAllComponent } from './components/todo-buton-delete-all/todo-buton-delete-all.component';
import { TodoInputAddItensComponent } from './components/todo-input-add-itens/todo-input-add-itens.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

//PAGES
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TodoButonDeleteAllComponent,
    TodoInputAddItensComponent,
    TodoListComponent,
    HomeComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
