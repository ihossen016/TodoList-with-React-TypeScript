import React from "react";
import "./componentsStyle.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
    return (
        <form className="input">
            <input
                type="input"
                className="input__box"
                placeholder="Enter A Task"
                onChange={e => setTodo(e.target.value)}
            />
            <button className="input_submit" type="submit">
                Go
            </button>
        </form>
    );
};

export default InputField;
