import moment from "moment";

const initState = {
    formItems: [],
    item: {id: 0, name: '', tags: [], dueDate: '', status: ''},
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

const updateSearchedFormItems = (state, action) => {
    if (action.keywords === '') {
        return {isShowSearchResult: false, searchedFormItems: []};
    }
    return {
        isShowSearchResult: true,
        searchedFormItems: [...state.formItems.filter(value => value.name.includes(action.keywords))]
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
            return [].concat(state.formItems).sort((a, b) => (a.name < b.name) === action.up);
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
            formItems = sortFormItems(state, action);
            return {...state, formItems};

        case 'INIT':
            let state4 = {...state, formItems: action.items};
            totalStatisticData = changeTotalStatisticData(state4);
            outOfDateStatisticData = changeOutDateStatisticData(state4, moment());
            return {
                ...state4,
                statisticData: {totalStatisticData: totalStatisticData, outOfDateStatisticData: outOfDateStatisticData}
            };
        case 'CHANGE_ITEM':
            debugger
            if (state.formItems.filter(it => it.id === action.currentId).length === 0) {
                return {...state, item: undefined};
            }
            return {...state, item: state.formItems.filter(it => it.id === action.currentId)[0]};
        default:
            return state;
    }
};

export default reducer;