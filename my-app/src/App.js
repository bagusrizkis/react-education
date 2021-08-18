/**
 * - class component
 *    - lifecycle
 * - function component
 *    - tampilan biasa
 *    -
 */

import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            // tempat menyimpan initial state component
            namaBatch: "Blazing Fox!",
            todos: [
                { id: 1, title: "Learn React.js" },
                { id: 2, title: "Learn React Native" },
                { id: 3, title: "Learn Docker" },
            ],
            newTodoTitle: "",
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((response) => response.json())
            .then((todos) => {
                this.setState({
                    todos: todos,
                });
            });
    }

    handleChange(event) {
        // console.log(this);
        // state = ""

        this.setState({
            // belum disubmit tapi udah nambah
            // todos: [...this.state.todos, { id: 10, title: event.target.value }],
            newTodoTitle: event.target.value,
        });
    }

    handleSubmitTodo(e) {
        e.preventDefault();
        console.log(this.state.newTodoTitle);
        // dibuat array baru
        this.setState({
            todos: [
                ...this.state.todos,
                {
                    id: this.state.todos[this.state.todos.length - 1].id + 1,
                    title: this.state.newTodoTitle,
                },
            ],
        });
    }

    render() {
        const { namaBatch, todos, newTodoTitle } = this.state;
        // this.handleChange();
        return (
            <>
                <h1 className="title">{namaBatch}</h1>
                <h2>Hacktiv8</h2>
                <hr></hr>
                {/* <ul>{JSON.stringify(todos)}</ul> */}
                <form onSubmit={this.handleSubmitTodo.bind(this)}>
                    <input
                        type="text"
                        value={newTodoTitle}
                        onChange={(e) => this.handleChange(e)}
                    ></input>
                    <input type="submit"></input>
                </form>
                <ul>
                    {todos.map((todo) => {
                        return (
                            <TodoList
                                key={todo.id}
                                title={todo.title}
                                todoId={todo.id}
                            />
                        );
                    })}
                    {/** [ React.createElement('li'), React.createElement('li'),
                    React.createElement('li'), ] */}
                </ul>
            </>
        );
    }
}

// React.createElement("ul", {key: ""}, [
//    React.createElement
// ])

export default App;
