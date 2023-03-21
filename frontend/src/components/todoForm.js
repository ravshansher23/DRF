import React from "react";


class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {author: [], project: '', body: ''}
    }


    handleChange(event){
        this.state(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleSubmit(event){
        this.props.createTodo(this.state.author, this.state.project, this.state.body)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <div className="form-group">
                <label for="author">author</label>
                    <input type="number" className="form-control" name="author" value={this.state.author}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                <label for="project">Project</label>
                    <input type="text" className="form-control" name="project" value={this.state.project}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <div className="form-group">
                <label for="body">Body</label>
                    <input type="text" className="form-control" name="body" value={this.state.body}
                           onChange={(event) => this.handleChange(event)}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Save"/>
            </form>
        )
    }
}    

export default TodoForm