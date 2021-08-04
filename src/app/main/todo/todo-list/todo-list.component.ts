import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  name = "To-Do List"
  list: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getMyToDoList()
  }
  addData(item: any) {
    console.log(this.list)
    this.list.push({ id: this.list.length + 1, name: item })
    console.log(this.list)
    localStorage.setItem("MyToDo", JSON.stringify(this.list))
  }
  removeTask(id: number) {
    this.list = this.list.filter((item: any) => item.id !== id)
    console.log(this.list)
  }
  getMyToDoList() {
    const temp: any = localStorage.getItem('MyToDo');
    this.list = JSON.parse(temp) || [];
  }

}
