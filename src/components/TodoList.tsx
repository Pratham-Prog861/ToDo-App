import React from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: { 
    id: string; 
    text: string; 
    completed: boolean;
    createdAt: Date;
  }[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onComplete, onDelete }) => {
  return (
    <div className="space-y-4 bg-gray-50/50 rounded-2xl p-8 shadow-inner">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          completed={todo.completed}
          createdAt={todo.createdAt}
          onComplete={onComplete}
          onDelete={onDelete}
        />
      ))}
      {todos.length === 0 && (
        <div className="text-center py-8 text-gray-500 text-lg">
          No todos yet. Add one above!
        </div>
      )}
    </div>
  );
};

export default TodoList;
