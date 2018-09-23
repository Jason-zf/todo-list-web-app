import {connect} from "react-redux";
import DetailComponent from "./component/DetailComponent";

const mapStateToProps = ({data}) => ({
    formItems: data.formItems,
    item: data.item,
});

const mapDispatchToProps = (dispatch) => ({
    onAddNewFormItem: (item,currentId) => dispatch({type:'ADD_TODO', item:{...item},currentId:currentId}),
    onChangeCurrentId:(currentId)=>dispatch({type:'CHANGE_CURRENT_ID',currentId: currentId})
});


const app = connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
export default app;