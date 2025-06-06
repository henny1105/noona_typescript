import useGetNewReleases from '../../../hooks/useGetNewReleases';
import LoadingSpinner from '../../../common/components/LoadingSpinner';
import ErrorMessage from '../../../common/components/ErrorMessage';
import { Typography, Box } from '@mui/material';
import Card from '../../../common/components/Card';
import { SimplifiedAlbum } from '../../../models/album';

const CARD_WIDTH = 180;
const CARD_HEIGHT = 220;

const NewReleases = () => {
	const { data, isLoading, error } = useGetNewReleases();

	if (isLoading) {
		return <LoadingSpinner />;
	}
	if (error) {
		return <ErrorMessage errorMessage={error.message} />;
	}
	return (
		<div>
			<Typography variant='h1' paddingTop='8px' paddingBottom='20px'>
				New Released Albums
			</Typography>
			{data && data.albums.items.length > 0 ? (
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: 2,
						justifyContent: 'flex-start',
					}}
				>
					{data.albums.items.map((album: SimplifiedAlbum) => (
						<Box
							key={album.id}
							sx={{
								width: CARD_WIDTH,
								minWidth: CARD_WIDTH,
								maxWidth: CARD_WIDTH,
								height: CARD_HEIGHT,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Card name={album.name} artistName={album.artists.map((artist) => artist.name).join(', ')} image={album.images[0].url} />
						</Box>
					))}
				</Box>
			) : (
				<Typography variant='h2'>No data</Typography>
			)}
		</div>
	);
};

export default NewReleases;
