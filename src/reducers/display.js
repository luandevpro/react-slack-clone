const appReducer = (state, action) => {
	switch (action.type) {
		case "POP":
			return {
				...state,
				display: state.display,
			};
		default:
			return state;
	}
};

export default appReducer;
