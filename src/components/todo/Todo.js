import TodoCreate from '../todo-create/TodoCreate';
import TodoList from '../todo-list/TodoList';
import './Todo.css';

const Todo = () => {
    const Todos = [
        { id: 1, title: 'Eat'},
        { id: 2, title: 'Sleep'},
        { id: 3, title: 'Code'},
    ]

    return (
        <div>
            <h3>Todo List</h3>
            <TodoCreate />
            <TodoList dataTodos={Todos}/>
        </div>
    )
}

export default Todo;