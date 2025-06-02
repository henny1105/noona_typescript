import React from 'react';
import { useParams } from 'react-router-dom';

const SearchWithKeywordPage = () => {
	const { keyword } = useParams();

	return (
		<div className='search-with-keyword-page'>
			<h1>Search Results for: {keyword}</h1>
			<div className='search-results'>
				{/* 여기에 검색 결과를 표시할 예정입니다 */}
				<p>검색 결과가 여기에 표시됩니다.</p>
			</div>
		</div>
	);
};

export default SearchWithKeywordPage;
