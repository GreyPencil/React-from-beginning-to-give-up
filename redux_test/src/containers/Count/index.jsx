import CountUI from '../../components/Count'
import {connect} from 'react-redux'
import { createIncrementAction, createDecrementAction, createDecrementAsyncAction } from '../../redux/count_action_creators'


function mapStateToProps(state){
    return {count:state}
}

function mapDispatchToProps(dispatch){
    return {
        add: number => dispatch (createIncrementAction(number)),
        minus: number => dispatch(createDecrementAction(number)),
        asyncAdd: (number,time) => dispatch(createDecrementAsyncAction(number,time))
}
}


export default connect(mapStateToProps,mapDispatchToProps)(CountUI)

