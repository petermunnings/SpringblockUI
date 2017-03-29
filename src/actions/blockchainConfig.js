export function getConfigHasErrored(bool) {
	return {
		type: 'CONFIG_HAS_ERRORED',
		hasErrored: bool
	};
}

export function getConfigIsLoading(bool) {
	return {
		type: 'CONFIG_IS_LOADING',
		isLoading: bool
	};
}

export function getConfigSuccess(config) {
	return {
		type: 'CONFIG_FETCH_DATA_SUCCESS',
		blockchainType: config.blockchainType,
		organisationName: config.organisationName
	};
}

export function getBlockchainConfig(url) {
	return (dispatch) => {
		dispatch(getConfigIsLoading(true));

		fetch(url)
			.then((response) => {
				if (!response.ok) {
					throw Error(response.statusText);
				}

				dispatch(getConfigIsLoading(false));
				return response;
			})
			.then((response) => response.json())
			.then((items) => dispatch(getConfigSuccess(items)))
			.catch(() => dispatch(getConfigHasErrored(true)));
	};
}
