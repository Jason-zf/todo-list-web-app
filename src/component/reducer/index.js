const initState = {
    formItems: [],
    item: {id: 0, action: '', tags: [], dueDate: '', status: ''},
    currentId: -1,
    statisticData: {
        totalStatisticData: [],
        outOfDateStatisticData: []
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

const changeTotalStatisticData = (state, action) => {
    let status = ['In progress', 'Blocked', 'To do'];
    return [
        {title: status[0], value: state.formItems.filter(item => item.status === status[0]).length, color: '#16796b'},
        {title: status[1], value: state.formItems.filter(item => item.status === status[1]).length, color: '#F75000'},
        {title: status[2], value: state.formItems.filter(item => item.status === status[2]).length, color: '#6566FF'},
    ]
};

const changeOutofDateStatisticData = (state, action) => {
    let type = ['Out of Date', 'In 1 days', 'In 3 day'];
    let value1 = state.formItems.filter(item => item.dueDate.diff(action.currentDate, 'days') < 0).length;
    let value2 = state.formItems.filter(item => item.dueDate.diff(action.currentDate, 'days') === 0).length;
    let value3 = state.formItems.filter(item => item.dueDate.diff(action.currentDate, 'days') === 2).length;
    return [
        {
            title: type[0],
            value: value1,
            color: '#16796b'
        },
        {
            title: type[1],
            value: value2,
            color: '#F75000'
        },
        {
            title: type[2],
            value: value3,
            color: '#6566FF'
        },
    ]
};

const reducer = (state = initState, action) => {
    let formItems = [];
    switch (action.type) {
        case 'ADD_TODO':
            formItems = addOrUpdateToDoList(state, action);
            return {...state, formItems};
        case 'DELETE_TODO':
            formItems = [...state.formItems];
            formItems.splice(action.id, 1);
            return {...state, formItems};
        case 'CHANGE_CURRENT_ID':
            let currentId = action.currentId;
            state.item.action = state.formItems[currentId].action;
            state.item.status = state.formItems[currentId].status;
            state.item.dueDate = state.formItems[currentId].dueDate;
            state.item.tags = state.formItems[currentId].tags;
            state.item.id = currentId;
            return {...state, currentId};
        case 'CHANGE_STATISTIC_DATA':
            state.statisticData.totalStatisticData = changeTotalStatisticData(state, action);
            state.statisticData.outOfDateStatisticData = changeOutofDateStatisticData(state, action);
            return state;
        default:
            return state;
    }
};

export default reducer;