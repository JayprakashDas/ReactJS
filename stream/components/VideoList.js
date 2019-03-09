import React from 'react';
import VideoItem from './VideoItem';


const Videolist = ({videos, onVideoselect})=>{
	//videos array passed from the App
	const renderList = videos.map((video)=>{
		return <VideoItem key={video.id.videoId} onVideoselect={onVideoselect} video={video}/>
	});

	return(
		<div className="ui relaxed divided list ">
			{renderList}
		</div>
		);
};

export default Videolist;