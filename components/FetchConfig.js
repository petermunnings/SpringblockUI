import React from 'react'
import { connect } from 'react-redux'
import { fetchConfig } from '../actions/fetchConfig'

let FetchConfig = ({ dispatch }) => {
  var input

  return (
		<div>
			<span>Url of Node configuration&nbsp;&nbsp;</span>
			<span>
        <input ref={node => {
          input = node
        }} />
			</span>
			<button onClick={e => {
					dispatch(fetchConfig(input.value))
				}}> 
				Fetch Config
			</button> 

		</div>
  )
}
FetchConfig = connect()(FetchConfig)

export default FetchConfig

