const initState = {
    formItems: [],
    item: {id: 0, action: '', tags: [], dueDate: '', status: ''},
    currentId: -1,
    statisticData: {
        totalStatisticData: [],
        outOfDateStatisticData: []
    },
    searchResult: {
        isShowSearchResult: false,
        searchedFormItems: []
    },
    advSearch: {
        tags: [],
        startDate: null,
        endDate: null
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
    let items = state.searchResult.isShowSearchResult === true ? state.searchResult.searchedFormItems : state.formItems;
    return [
        {title: status[0], value: items.filter(item => item.status === status[0]).length, color: '#16796b'},
        {title: status[1], value: items.filter(item => item.status === status[1]).length, color: '#F75000'},
        {title: status[2], value: items.filter(item => item.status === status[2]).length, color: '#6566FF'},
    ]
};

const changeOutDateStatisticData = (state, action) => {
    let type = ['Out of Date', 'In 1 days', 'In 3 day'];
    let items = state.searchResult.isShowSearchResult === true ? state.searchResult.searchedFormItems : state.formItems;
    let value1 = items.filter(item => item.dueDate.diff(action.currentDate, 'days') < 0).length;
    let value2 = items.filter(item => item.dueDate.diff(action.currentDate, 'days') === 0).length;
    let value3 = items.filter(item => item.dueDate.diff(action.currentDate, 'days') === 2).length;
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

const updateSearchedFormItems = (state, action) => {
    if (action.keywords === '') {
        return {isShowSearchResult: false, searchedFormItems: []};
    }
    return {
        isShowSearchResult: true,
        searchedFormItems: [...state.formItems.filter(value => value.action.includes(action.keywords))]
    };

};

const updateAdvSearchResult = (state, action) => {
    if (action.isClickOkBtn === false) {
        return {isShowSearchResult: false, searchedFormItems: []};
    } else {
        let tagsRes = state.advSearch.tags.length !== 0 ? state.formItems.filter(value => value.tags.filter(tag => state.advSearch.tags.includes(tag)).length > 0) : [];
        let dateRes = [];
        if (state.advSearch.startDate && state.advSearch.endDate) {
            dateRes = state.formItems.filter(item => item.dueDate >= state.advSearch.startDate && item.dueDate <= state.advSearch.endDate);
        }
        if (tagsRes.length > 0 && dateRes.length > 0)
            return {isShowSearchResult: true, searchedFormItems: tagsRes.filter(item => dateRes.includes(item))};
        return {isShowSearchResult: true, searchedFormItems: tagsRes.length > 0 ? tagsRes : dateRes};
    }
};

const sortFormItems = (state, action) => {
    switch (action.column) {
        case 'action':
            return [].concat(state.formItems).sort((a, b) => (a.action < b.action) === action.up);
        case 'tags':
            return [].concat(state.formItems).sort((a, b) => (a.tags < b.tags) === action.up);
        case 'status':
            return [].concat(state.formItems).sort((a, b) => (a.status < b.status) === action.up);
        case 'dueDate':
            return [].concat(state.formItems).sort((a, b) => (a.dueDate < b.dueDate) === action.up);
        default:
            return state.formItems;
    }
};

const reducer = (state = initState, action) => {
    let formItems = [];
    let totalStatisticData = {};
    let outOfDateStatisticData = {};
    switch (action.type) {
        case 'ADD_TODO':
            debugger
            formItems = addOrUpdateToDoList(state, action);
            return {...state, formItems: formItems, item: {}, advSearch: {tags: [], startDate: null, endDate: null}};
        case 'DELETE_TODO':
            formItems = [...state.formItems];
            formItems.splice(action.id, 1);
            let state1 = {...state, formItems};
            totalStatisticData = changeTotalStatisticData(state1, action);
            outOfDateStatisticData = changeOutDateStatisticData(state1, action);
            return {
                ...state,
                formItems: formItems,
                statisticData: {totalStatisticData: totalStatisticData, outOfDateStatisticData: outOfDateStatisticData}
            };
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
            state.statisticData.outOfDateStatisticData = changeOutDateStatisticData(state, action);
            return state;
        case 'SIMPLE_SEARCH':
            let searchResult = updateSearchedFormItems(state, action);
            let state2 = {...state, searchResult: searchResult};
            totalStatisticData = changeTotalStatisticData(state2, action);
            outOfDateStatisticData = changeOutDateStatisticData(state2, action);
            return {
                ...state,
                searchResult: searchResult,
                statisticData: {totalStatisticData: totalStatisticData, outOfDateStatisticData: outOfDateStatisticData}
            };
        case 'ADVANCE_SEARCH':
            let advSearchResult = updateAdvSearchResult(state, action);
            let state3 = {...state, searchResult: advSearchResult};
            totalStatisticData = changeTotalStatisticData(state3, action);
            outOfDateStatisticData = changeOutDateStatisticData(state3, action);
            return {
                ...state,
                searchResult: advSearchResult,
                statisticData: {totalStatisticData: totalStatisticData, outOfDateStatisticData: outOfDateStatisticData}
            };
        case 'SORT_FORM_ITEMS':
            debugger
            formItems = sortFormItems(state, action);
            return {...state, formItems};
        default:
            return state;
    }
};

export default reducer;