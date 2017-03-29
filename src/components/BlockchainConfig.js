import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getBlockchainConfig } from '../actions/blockchainConfig';

class BlockchainConfig extends Component {
	componentDidMount() {
		this.props.fetchData('http://localhost:8081/getConfig'); //This need to move to an input text box
	}

	render() {
		if (this.props.hasErrored) {
			return <p>Sorry! There was an error loading the Config</p>;
		}

		if (this.props.isLoading) {
			return <p>Loading…</p>;
		}

		return (
			<div>
				<p>Blockchain Type: {this.props.blockchainType}</p>
				<p>Organisation Name: {this.props.organisationName}</p>
			</div>
		);
	}
}

BlockchainConfig.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(BlockchainConfig);
