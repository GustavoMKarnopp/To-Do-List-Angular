import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoButonDeleteAllComponent } from './todo-buton-delete-all.component';

describe('TodoButonDeleteAllComponent', () => {
  let component: TodoButonDeleteAllComponent;
  let fixture: ComponentFixture<TodoButonDeleteAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoButonDeleteAllComponent]
    });
    fixture = TestBed.createComponent(TodoButonDeleteAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
