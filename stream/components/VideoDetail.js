import React from 'react';



const VideoDetail=({video})=>{
	if(!video){
		return <div>Loading</div>
	}

	const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`


	return(
		<div>
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
				<div className="ui segment">
					<div className="ui header">
						{video.snippet.title}
					<p>{video.snippet.channelTitle}</p>
					<p>{video.snippet.description}</p>
					<p>{video.snippet.publishedAt}</p>
					</div>
				</div>
		</div>);
}

export default VideoDetail;