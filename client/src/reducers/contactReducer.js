const contactsInitialState = []

const contactsReducer = (state=contactsInitialState, action) => {
    switch(action.type) {
        case 'CONTACTS_LIST' : {
            return [...action.payload]
        }
        case 'ADD_CONTACT' : {
            return [...state,action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default contactsReducer