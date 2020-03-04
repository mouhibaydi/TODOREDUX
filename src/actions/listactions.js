export const Addlist = newadd =>{
        return {
            type:"add",
            payload: newadd
        }
}
export const Deletelist= item =>{
    return{
        type:"delete",
        payload:item
    }
}

export const saveTodo = todo => {
    return{
        type: 'SAVE_TODO',
        payload: todo
    }
}

export const editTodo = todo => {
    return{
        type: 'EDIT_TODO',
        payload: todo
    }
}
export const clearSaved = () => {
    return{
        type: 'CLEAR'
    }
}