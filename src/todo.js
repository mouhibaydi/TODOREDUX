import React, { Component } from 'react';
import { connect } from "react-redux";
import { Addlist, editTodo, clearSaved } from "./actions/listactions"
import { v1 as uuidv1 } from 'uuid';


class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "",
        }

    }
    handlechange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    addnew = () => {
        this.props.addnew({ text: this.state.text, id: uuidv1(),class:false, editMode: false })
    }
    componentWillReceiveProps(nextProps){
        this.setState(nextProps.saved);
    }
    editTo = () => {
        this.props.edit(this.state)
        this.props.clear()
        this.setState({text: ''})
    }
    render() {
        return (
            <div>
                <p>Daily todo list</p>
                <input placeholder="add your todo" value={this.state.text}  onChange={this.handlechange} />
                <button onClick={() => {
                    this.props.saved ? this.editTo() : this.addnew()
                }
                }>{this.props.saved ? 'Edit' : 'Add'}</button>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addnew: (x) => dispatch(Addlist(x)),
        edit: (x) => dispatch(editTodo(x)),
        clear: () => dispatch(clearSaved())
    }
}
const mapStateToProps = state => {
    return {
        saved: state.TodoEdit
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
