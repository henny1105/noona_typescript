import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistPage = () => {
	// 임시 플레이리스트 데이터
	const playlists = [
		{ id: '1', name: '좋아하는 노래', description: '내가 좋아하는 노래 모음' },
		{ id: '2', name: '운동할 때 듣는 노래', description: '운동할 때 듣기 좋은 노래들' },
		{ id: '3', name: '공부할 때 듣는 노래', description: '집중하기 좋은 노래들' },
	];

	return (
		<div className='playlist-page'>
			<h1>My Playlists</h1>
			<div className='playlist-grid'>
				{playlists.map((playlist) => (
					<Link to={`/playlist/${playlist.id}`} key={playlist.id} className='playlist-card'>
						<h2>{playlist.name}</h2>
						<p>{playlist.description}</p>
					</Link>
				))}
			</div>
		</div>
	);
};

export default PlaylistPage;
