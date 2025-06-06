import useGetNewReleases from '../../../hooks/useGetNewRelease';
import LoadingSpinner from '../../../common/components/LoadingSpinner';
import ErrorMessage from '../../../common/components/ErrorMessage';
import { Typography, Box } from '@mui/material';
import Card from '../../../common/components/Card';

const NewReleases = () => {
	const { data, isLoading, error } = useGetNewReleases();

	if (isLoading) {
		return <LoadingSpinner />;
	}
	if (error) {
		return <ErrorMessage errorMessage={error.message} />;
	}
	return (
		<Box>
			<Typography variant='h1' paddingTop='8px'>
				New Released Albums
			</Typography>
			{data && data.albums.items.length > 0 ? (
				<Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }, gap: 2 }}>
					{data.albums.items.map((album) => (
						<Box key={album.id}>
							<Card name={album.name} artistName={album.artists.map((artist) => artist.name).join(', ')} image={album.images[0].url} />
						</Box>
					))}
				</Box>
			) : (
				<Typography variant='h2'>No data</Typography>
			)}
		</Box>
	);
};

export default NewReleases;
