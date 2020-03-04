import React, { Component } from 'react';
import { Deletelist, saveTodo } from "./actions/listactions"
import { connect } from "react-redux";
class List extends Component {
    deleteitem=(y)=>{
        this.props.deleteitem(y)
    }
    render() {
        return (
            <div>
                {this.props.list.map(el =>
                    <div>
                        <p>{el.text}</p>
                        <button onClick={() => this.props.saveItem(el)}>edit</button>
                        <button onClick={()=>this.deleteitem(el.id)}>delete</button>
                    </div>)}
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        list: state.Listreducer
    }
}
 const mapDispatchToProps=dispatch=>{
     return {
         deleteitem:(x)=> dispatch(Deletelist(x)),
         saveItem:(x)=> dispatch(saveTodo(x))
     }
 }

export default connect(mapStateToProps,mapDispatchToProps)(List)
