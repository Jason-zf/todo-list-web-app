import moment from "moment";

const initState = {
    formItems: [],
    item: {id: 0, name: '', tags: [], dueDate: '', status: ''},
    statisticData: {
        totalStatisticData: [],
        outOfDateStatisticData: []
    },
    advSearch: {
        tags: [],
        startDate: null,
        endDate: null
    }
};


const changeTotalStatisticData = (state) => {
    let status = ['In progress', 'Blocked', 'To do'];
    return [
        {title: status[0], value: state.formItems.filter(item => item.status === status[0]).length, color: '#16796b'},
        {title: status[1], value: state.formItems.filter(item => item.status === status[1]).length, color: '#F75000'},
        {title: status[2], value: state.formItems.filter(item => item.status === status[2]).length, color: '#6566FF'},
    ]
};

const changeOutDateStatisticData = (state, currentDate) => {
    let type = ['Out of Date', 'In 1 days', 'In 3 day'];
    let value1 = state.formItems.filter(item => moment(item.dueDate).diff(currentDate, 'days') < 0).length;
    let value2 = state.formItems.filter(item => moment(item.dueDate).diff(currentDate, 'days') === 0).length;
    let value3 = state.formItems.filter(item => moment(item.dueDate).diff(currentDate, 'days') === 2).length;
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
    let totalStatisticData = {};
    let outOfDateStatisticData = {};
    switch (action.type) {
        case 'INIT':
            let state4 = {...state, formItems: action.items};
            totalStatisticData = changeTotalStatisticData(state4);
            outOfDateStatisticData = changeOutDateStatisticData(state4, moment());
            return {
                ...state4,
                statisticData: {totalStatisticData: totalStatisticData, outOfDateStatisticData: outOfDateStatisticData}
            };
        case 'CHANGE_ITEM':
            if (state.formItems.filter(it => it.id === action.currentId).length === 0) {
                return {...state, item: {id: 0, name: '', tags: [], dueDate: '', status: ''}};
            }
            return {...state, item: state.formItems.filter(it => it.id === action.currentId)[0]};
        default:
            return state;
    }
};

export default reducer;