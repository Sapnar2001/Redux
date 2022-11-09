export const ADD_TODO = 'ADD_TODO';
export const DELETE_DATA='DELETE_DATA';
export const EDIT_DATA='EDIT_DATA';

export const AddTodo = (List,type)=> {
    return{
    type: ADD_TODO,
     payload:{[type]:List}
    };
}

    // payload:
// export const RemoveTodo = payload => ({type: REMOVE_TODO, payload});



export const deletedata=(List,type)=>{
    return{
     type:DELETE_DATA,
     payload:{[type]:List}
    //  payload:{List:{[type]:List}}
    };
}
export const editdata=(List,type)=>{
    return{
     type:EDIT_DATA,
     payload:{[type]:List}
    //  payload:{List:{[type]:List}}
    };
}
