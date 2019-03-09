import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../API/Youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{

	state ={videos:[], selectedVideo:null};
	//To Show the video first tie without search default
	componentDidMount(){
		this.onSearchTermSubmit('good days');
	}

	onSearchTermSubmit = async term =>{
		const response = await youtube.get('/search',{
			params:{
				q: term
			}
		});
		this.setState({
			videos:response.data.items,
			selectedVideo: response.data.items[0]
			});
		//So that the default video comes when user search selected vieo is updated as well

	};
	onVideoselect = (video)=>{
		this.setState({selectedVideo:video});
	}

	render(){
		return(
			<div className="ui container">
				<SearchBar onTermSubmit={ this.onSearchTermSubmit}/>
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo}  />
						</div>
						<div className="five wide column">	
							<VideoList onVideoselect={this.onVideoselect} 
							videos={this.state.videos}/>
						</div>
					</div>
				</div>
			</div>
			);
	}
};


export default  App;