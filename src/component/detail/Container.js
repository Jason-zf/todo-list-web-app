import {connect} from "react-redux";
import DetailComponent from "./component/DetailComponent";

const mapStateToProps = (state) => ({
    formItems: state.formItems,
    item: state.item,
    currentId: state.currentId
});

const mapDispatchToProps = (dispatch) => ({
    onAddNewFormItem: (item,currentId) => dispatch({type:'ADD_TODO', item:{...item},currentId:currentId})
});


const app = connect(mapStateToProps, mapDispatchToProps)(DetailComponent);
export default app;