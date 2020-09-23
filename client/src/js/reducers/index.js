import { 
  GET_PROJECTS,
  FILTER_PROJECTS
} from '../constants/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {
const payload = action.payload;

	switch (action.type) {
		case GET_PROJECTS:
			return [
				...state, payload
				]

		case FILTER_PROJECTS:
// 			const moveTask = (task, index) => {
// 				if (task.id === payload.id && !task.completed) {
// 					state.push(state.splice(index, 1)[0]);
// 				} else if (task.id === payload.id && task.completed) {
// 					state.splice(index, 1)
// 					state.unshift(task)
// 				}
// 			}		
// 			state.forEach(moveTask);
		
// 			return state.map(task =>
// 				task.id === payload.id ? { 
// 						...task, 
// 						completed: !task.completed, 
// 						time: payload.time 
// 					} 
// 						: task
// 				)

// 		case DELETE_TASK:
// 			return state.filter(task => task.id !== payload);

// 		case CLEAR_TASK:
// 			return state.filter(task => task.completed !== payload)
		
    default:
			return state;
  }
}

export default rootReducer;
