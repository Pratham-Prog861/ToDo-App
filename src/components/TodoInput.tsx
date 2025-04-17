import React, { useState } from 'react';
import { Input } from "@/components/ui/input"

interface TodoInputProps {
  onAdd: (text: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() !== '') {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 p-4 bg-white rounded-lg shadow mb-4">
      <Input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 transition outline-none shadow-sm text-base"
      />
      <button type="submit" className="rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 shadow transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
