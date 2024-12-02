import React, { useRef, useState } from "react";
import { TodoItemType } from "../commonTypes";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState<TodoItemType[]>([]); // 전체 투두 목록
  const [newTodo, setNewTodo] = useState(""); // 새로 추가될 투두 하나
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodo = () => {
    const updatedTodos = [
      ...todos,
      { id: Date.now(), text: newTodo, completed: false },
    ];
    setTodos(updatedTodos);
    setNewTodo("");
  };

  // 엔터 입력시 투두 추가 (키보드 이벤트)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addTodo();
  };

  // focus 효과 (useRef 사용)
  const focusInput = () => {
    inputRef.current?.focus(); // null일 수 있기 때문에 ? 추가
  };

  // 투두 아이템 완료 상태 변경 함수
  const toggleComplete = (targetId: number) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === targetId ? { ...todo, completed: true } : todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>TodoList</h1>
      <div>
        완료 개수 : {todos.filter((todo) => todo.completed === true).length}
      </div>
      <div>
        <input
          type="text"
          placeholder="todo"
          value={newTodo}
          ref={inputRef}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTodo}>Add</button>
        <button onClick={focusInput}>Focus</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}