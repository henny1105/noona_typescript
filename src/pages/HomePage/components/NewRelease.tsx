import { Typography } from '@mui/material';
import React from 'react';
import useGetNewReleases from '../../../hook/useGetNewRelease';

const NewRelease = () => {
	const { data, error, isLoading } = useGetNewReleases();
	return (
		<div>
			<Typography variant='h1' paddingTop='8px'>
				New Release Albums
			</Typography>
		</div>
	);
};

export default NewRelease;
