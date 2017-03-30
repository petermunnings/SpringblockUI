import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getBlockchainConfig } from '../actions/blockchainConfig';
import NavBar from './NavBar';

class RequestConfig extends Component {
	fetchConfig() {
		this.props.fetchData('http://localhost:8081/getConfig'); //This need to move to an input text box
	}

	render() {
		return (
			<div>
				Please enter the address of the blockchain api endpoint: <input type='text' value='http://localhost:8081/getConfig' />
				<button onClick={this.fetchConfig.bind(this)}>Click to load configuration</button>
			</div>
		);
	}
}

RequestConfig.propTypes = {
		fetchData: PropTypes.func.isRequired,
		blockchainType: PropTypes.string.isRequired,
		organisationName: PropTypes.string.isRequired,
		hasErrored: PropTypes.bool.isRequired,
		isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
	return {
		blockchainType: state.blockchainType,
		organisationName: state.organisationName,
		hasErrored: state.configHasErrored,
		isLoading: state.configIsLoading
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchData: (url) => dispatch(getBlockchainConfig(url))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestConfig);
