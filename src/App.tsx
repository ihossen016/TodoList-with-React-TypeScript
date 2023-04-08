import React, { useState } from "react";
import "./app.css";
import InputField from "./components/InputField";
import { Todo } from "./model";

const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();

        if (todo) {
            setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
            setTodo("");
        }
    };

    return (
        <div className="app">
            <span className="heading">TodoList</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        </div>
    );
};

export default App;
