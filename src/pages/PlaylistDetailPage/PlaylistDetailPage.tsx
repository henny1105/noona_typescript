import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistDetailPage = () => {
	const { id } = useParams();

	return (
		<div className='playlist-detail-page'>
			<h1>Playlist Details</h1>
			<div className='playlist-info'>
				<h2>Playlist ID: {id}</h2>
				{/* 여기에 플레이리스트 상세 정보를 표시할 예정입니다 */}
				<div className='playlist-tracks'>
					<p>플레이리스트의 트랙들이 여기에 표시됩니다.</p>
				</div>
			</div>
		</div>
	);
};

export default PlaylistDetailPage;
