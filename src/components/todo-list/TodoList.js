import './TodoList.css';

const TodoList = (props) => {
    return (
        <ul>{
             props.dataTodos.map(() => {
                 return <li key={todo.id}>{todo.title}</li>
             })
        }</ul>
    )
}

export default TodoList;