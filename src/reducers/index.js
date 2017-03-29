import { combineReducers } from 'redux';
import { blockchainType, organisationName, configHasErrored, configIsLoading } from './blockchainConfig';

export default combineReducers({
	blockchainType,
	organisationName,
	configHasErrored,
	configIsLoading
});
