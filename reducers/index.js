export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CONFIG_REQUEST':
		{
			var request = new Request(action.url, {
				headers: new Headers({
					'Content-Type': 'application/json'
				})
			});

			fetch(request)  
				.then((response) => response.json())
				.then((responseJson) => {
					console.log('responseJson:', responseJson); 
					console.log('at this point we need to update the status by calling FETCH_CONFIG_RESPONSE');
				})
				.catch((error) => {
					console.error(error);
				});
		}
		case 'FETCH_CONFIG_RESPONSE':
		{

		}
    default:
      return state
  }
}

