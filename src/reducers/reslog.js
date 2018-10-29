import * as Types from "../constants/ActionTypes";

const reslog = (state, action) => {
	switch (action.type) {
		case Types.GET_RESLOG:
			console.log(action);
			if (action.status === "loading") {
				return {
					loadingButton: true,
				};
			} else if (action.status === "notloading1") {
				return {
					loadingButton: false,
				};
			} else if (action.status === "notloading2") {
				return {
					loadingButton: false,
					errorResLog: action.payload.message,
				};
			}
		default:
			return state;
	}
};

export default reslog;
