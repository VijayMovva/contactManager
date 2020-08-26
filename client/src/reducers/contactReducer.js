const contactsInitialState = []

const contactsReducer = (state=contactsInitialState, action) => {
    switch(action.type) {
        case 'CONTACTS_LIST' : {
            return [...action.payload]
        }
        case 'ADD_CONTACT' : {
            return [...state,action.payload]
        }
        case 'DELETE_CONTACT' : {
            return state.filter((c)=>{return c._id != action.payload})
        }
        case 'EDIT_CONTACT' : {
            return state.map((c)=>{
                if(c._id == action.payload._id){
                return action.payload
                }else{
                return c
                }
            })
        }
        default : {
            return [...state]
        }
    }
}

export default contactsReducer