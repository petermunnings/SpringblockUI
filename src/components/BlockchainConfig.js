import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { getBlockchainConfig } from '../actions/blockchainConfig';
import NavBar from './NavBar';

class BlockchainConfig extends Component {
	componentDidMount() {
		this.props.fetchData('http://localhost:8081/getConfig'); //This need to move to an input text box
	}

	render() {
		if (this.props.hasErrored) {
			return ( 
				<div>
					<NavBar />
					<p>Sorry! There was an error loading the Config</p>;
				</div>
			);
		}

		if (this.props.isLoading) {
			return ( 
				<div>
					<NavBar />
					<p>Loading…</p>;
				</div>
			);
		}

		return (
			<div>
				<NavBar />
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
