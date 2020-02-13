class ToDoList {
  constructor(container, dbName) {
    //Representa o estado da aplicación
    this.state = {
      todos: []
    };

    //Gardo referencia á base de datos local
    this.dbName = dbName;

    // Creo referencias ao Formulario, lista, limpar, borrartodo
    this.addForm = container.querySelector('.addForm');
    this.cleanButton = container.querySelector('.cleanButton');
    this.destroyButton = container.querySelector('.destroyButton');
    this.todoList = container.querySelector('.todoList');

    //Comprobo que existan os elementos e se non lanzo error
    if (
      !this.addForm ||
      !this.cleanButton ||
      !this.destroyButton ||
      !this.todoList
    ) {
      throw new Error('Revisa o HTML, faltan elementos');
    }

    const localTodos = window.localStorage.getItem(this.dbName);

    if (localTodos) {
      this.state.todos = JSON.parse(localTodos);
      this.render();
    }
  }

  start() {
    //Asigna eventos
    this.addForm.addEventListener('submit', e => {
      e.preventDefault();
      const todoInput = this.addForm.elements.todotext;
      const todoText = todoInput.value;

      if (todoText.length > 0 && todoText.length < 100) {
        this.addToDo(todoText);
        todoInput.value = '';
      }
    });

    this.todoList.addEventListener('click', e => {
      const target = e.target;

      if (target.matches('input[type="checkbox"]')) {
        const index = target.getAttribute('data-index');
        this.switchToDoStatus(index);
      }
    });

    this.cleanButton.addEventListener('click', e => {
      this.deleteDoneToDos();
    });

    this.destroyButton.addEventListener('click', e => {
      if (
        prompt('Escribe BORRAR para borrar todo.').toUpperCase() === 'BORRAR'
      ) {
        this.deleteAllToDos();
      }
    });
  }

  //Engade un todo
  addToDo(text) {
    const newToDo = {
      text: text,
      done: false
    };

    this.state.todos.unshift(newToDo);

    this.sync();
  }

  //Cambia un todo a feito/non feito
  switchToDoStatus(index) {
    const todo = this.state.todos[index];
    todo.done = !todo.done;

    this.sync();
  }

  //Borra todos os todos feitos
  deleteDoneToDos() {
    const cleanTodos = this.state.todos.filter(todo => !todo.done);

    this.state.todos = cleanTodos;

    this.sync();
  }

  //Borra todos os todos
  deleteAllToDos() {
    this.state.todos = [];

    this.sync();
  }

  //Sincroniza a aplicación
  sync() {
    this.render();

    window.localStorage.setItem(this.dbName, JSON.stringify(this.state.todos));
  }

  render() {
    this.todoList.innerHTML = '';

    const fragment = document.createDocumentFragment();

    for (const [index, todo] of this.state.todos.entries()) {
      const todoItem = document.createElement('li');
      const todoText = document.createElement('p');
      todoText.textContent = todo.text;

      const todoCheck = document.createElement('input');
      todoCheck.setAttribute('type', 'checkbox');
      todoCheck.setAttribute('data-index', index);

      if (todo.done) {
        todoItem.classList.add('done');
        todoCheck.setAttribute('checked', true);
      }

      todoItem.appendChild(todoCheck);
      todoItem.appendChild(todoText);

      fragment.appendChild(todoItem);
    }

    this.todoList.appendChild(fragment);
  }
}

const myList = new ToDoList(document.body, 'todo-list-app');
myList.start();
