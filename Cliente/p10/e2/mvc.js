// Parte del Modelo
class ToDoModel {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
    }
  
    removeTask(index) {
      if (index >= 0 && index < this.tasks.length) {
        this.tasks.splice(index, 1);
      }
    }
  }
  
  // Parte de la Vista
  class ToDoView {
    constructor(controller) {
      this.controller = controller;
      this.taskList = document.getElementById('task-list');
      this.taskForm = document.getElementById('task-form');
  
      this.taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskInput = document.getElementById('task-input');
        const newTask = taskInput.value.trim();
        if (newTask !== '') {
          this.controller.addTask(newTask);
          taskInput.value = '';
        }
      });
  
      this.updateView();
    }
  
    updateView() {
      this.taskList.innerHTML = '';
  
      this.controller.getTasks().forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.addEventListener('click', () => {
          this.controller.removeTask(index);
        });
  
        taskItem.appendChild(deleteButton);
        this.taskList.appendChild(taskItem);
      });
    }
  }
  
  // Parte del Controlador
  class ToDoController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    addTask(task) {
      this.model.addTask(task);
      this.view.updateView();
    }
  
    removeTask(index) {
      this.model.removeTask(index);
      this.view.updateView();
    }
  
    getTasks() {
      return this.model.tasks;
    }
  }
  
  // Instanciar las partes del MVC
  const model = new ToDoModel();
  const view = new ToDoView(new ToDoController(model, null));
  const controller = new ToDoController(model, view);
  view.controller = controller;  // Corregir referencia circular
  
  