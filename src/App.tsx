import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchWithKeywordPage from './pages/SearchWithKeywordPage/SearchWithKeywordPage';
import PlaylistDetailPage from './pages/PlaylistDetailPage/PlaylistDetailPage';
import PlaylistPage from './pages/PlaylistPage/PlaylistPage';

function App() {
	return (
		<Routes>
			<Route path='/' element={<AppLayout />}>
				<Route index element={<HomePage />} />
				<Route path='search' element={<SearchPage />} />
				<Route path='search/:keyword' element={<SearchWithKeywordPage />} />
				<Route path='playlist/:id' element={<PlaylistDetailPage />} />
				<Route path='playlist' element={<PlaylistPage />} />
			</Route>
		</Routes>
	);
}

export default App;
