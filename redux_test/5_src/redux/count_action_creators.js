import { INCREMENT, DECREMENT} from './constant'
// function createIncrementAction(data){
//     return {type:'increment', data:data}
// }


export const createIncrementAction = (data) => ({type: INCREMENT, data })
export const createDecrementAction = (data) => ({type: DECREMENT, data })
export const createDecrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
           dispatch(createIncrementAction(data))     
        }, time)
    }
}
    