import React from "react";

class TodoList extends React.Component {
    render() {
        return <li>{this.props.title}</li>;
    }
}

export default TodoList;
