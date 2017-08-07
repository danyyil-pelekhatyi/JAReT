import browserHistory from 'react-router/lib/browserHistory'

// ------------------------------------
// Constants
// ------------------------------------
export const DATA_CHANGE = 'DATA_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function dataChange (data = {}) {
  return {
    type    : DATA_CHANGE,
    payload : data
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateData = ({ dispatch }) => {
  return (nextData) => dispatch(dataChange(nextData))
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [{
	team: "Maverick",
	improvements: ["improvement1", "improvement2"],
	success: ["success1", "success2"],
	actions: ["actions1", "actions2"]
}]

export default function dataReducer (state = initialState, action) {
  return action.type === DATA_CHANGE
    ? action.payload
    : state
}
