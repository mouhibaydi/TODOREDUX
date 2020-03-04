
const tab =[]
const Listreducer =(state=tab,action)=>{
    switch(action.type){
        case "add": 
        return state.concat(action.payload);
       case "delete":
           return state.filter(el => el.id !==action.payload)
        case "edit":
         return state.map(el =>el.id===action.payload ?  {...el,class:!el.class} : el )
        case 'EDIT_TODO':
            return state.map(el => el.id === action.payload.id ? action.payload : el)
           default: 
        return state
    }
}
export default Listreducer