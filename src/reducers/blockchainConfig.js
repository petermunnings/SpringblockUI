export function configHasErrored(state = false, action) {
	switch (action.type) {
		case 'CONFIG_HAS_ERRORED':
			return action.hasErrored;

		default:
			return state;
	}
}

export function configIsLoading(state = false, action) {
	switch (action.type) {
		case 'CONFIG_IS_LOADING':
			return action.isLoading;

		default:
			return state;
	}
}

export function blockchainType(state = '', action) {
	switch (action.type) {
		case 'CONFIG_FETCH_DATA_SUCCESS':
			return action.blockchainType;

		default:
			return state;
	}
}

export function organisationName(state = '', action) {
	switch (action.type) {
		case 'CONFIG_FETCH_DATA_SUCCESS':
			return action.organisationName;

		default:
			return state;
	}
}
