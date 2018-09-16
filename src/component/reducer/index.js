const initState = {
    formItems: [],
    item: {id: 0, action: '', tags: [], dueDate: '', status: ''},
    currentId: -1,
    statisticData: {
        totalStatisticData: {},
        outOfDateStatisticData: {}
    }
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
    let formItems = [];
    switch (action.type) {
        case 'ADD_TODO':
            debugger
            formItems = addOrUpdateToDoList(state, action);
            return {...state, formItems};
        case 'DELETE_TODO':
            debugger
            formItems = [...state.formItems];
            formItems.splice(action.id, 1);
            return {...state, formItems};
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