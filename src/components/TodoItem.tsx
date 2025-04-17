import React from 'react';
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@radix-ui/react-label"
import { cn } from '../lib/utils';

interface TodoItemProps {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed, createdAt, onComplete, onDelete }) => {
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="flex items-start space-x-4 py-6 px-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group relative border border-gray-100">
      <div className="pt-1">
        <Checkbox
          id={`todo-${id}`}
          checked={completed}
          onCheckedChange={() => onComplete(id)}
          className="scale-125 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
        />
      </div>
      <div className="grid gap-2 leading-normal flex-1">
        <Label
          htmlFor={`todo-${id}`}
          className={cn(
            "text-lg font-medium transition-all duration-300 leading-relaxed",
            completed ? "line-through text-gray-400" : "text-gray-800"
          )}
        >
          {text}
        </Label>
        <span className="text-sm text-gray-500">
          {formatDate(createdAt)}
        </span>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 rounded-full p-3 hover:bg-red-50 text-gray-400 hover:text-red-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 transform hover:rotate-90 transition-transform duration-300"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  );
};

export default TodoItem;
