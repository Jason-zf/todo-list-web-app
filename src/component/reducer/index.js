const initState = {
    formItems: [],
    searchItems: [],
    isShowSearchItems: false,
    item: {id: 0, action: '', tags: [], dueDate: '', status: ''},
    currentId: -1
};

function addOrUpdateToDoList(state, action) {
    let formItems = state.formItems;
    if (action.currentId !== action.item.id) {
        formItems.push(action.item);
    } else {
        formItems[action.currentId] = action.item;
    }
    return formItems;
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let formItems = addOrUpdateToDoList(state, action);
            return {...state, formItems};
        case 'DELETE_TODO':
            return state;
        case 'CHANGE_CURRENT_ID':
            debugger
            let currentId = action.currentId;
            state.item.action = state.formItems[currentId].action;
            state.item.status = state.formItems[currentId].status;
            state.item.dueDate = state.formItems[currentId].dueDate;
            state.item.tags = state.formItems[currentId].tags;
            state.item.id = currentId;
            return {...state, currentId};
        default:
            return state;
    }
};

export default reducer;