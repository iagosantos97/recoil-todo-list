import { useRecoilValue } from 'recoil';

// import { todoListState } from "./atoms";
import { filteredTodoListState } from './selectors';
import TodoItem from './TodoItem';
import TodoItemCreator from './TodoItemCreator';
import TodoListStats from './TodoListStats';
import TodoListFilters from './TodoListFilters';

const TodoList = () => {
    // const todoList = useRecoilValue(todoListState);
    const todoList = useRecoilValue(filteredTodoListState);

    return (
        <>
            <div style={{ marginLeft: '20px' }}>
                <TodoListStats />
                <TodoListFilters />
                <TodoItemCreator />
                {todoList.map((todoItem) => (
                    <TodoItem key={todoItem.id} item={todoItem} />
                ))}
            </div>
        </>
    );
};

export default TodoList;
