export const sessionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_SESSION':
           console.log(action);
            return [...state,action.session];
        case 'DELETE_SESSION':
            console.log(action);
            return [...state.filter(el => el.title != action.session.title && el.speaker != action.session.title)];

    }
};