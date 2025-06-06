import useGetNewReleases from '../../../hooks/useGetNewRelease';
import LoadingSpinner from '../../../common/components/LoadingSpinner';
import ErrorMessage from '../../../common/components/ErrorMessage';
import { Typography, Box } from '@mui/material';
import Card from '../../../common/components/Card';
import PlayButton from '../../../common/components/PlayButton';

const NewReleases = () => {
	const { data, isLoading, error } = useGetNewReleases();

	if (isLoading) {
		return (
			<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', width: '100%' }}>
				<LoadingSpinner />
			</Box>
		);
	}
	if (error) {
		return <ErrorMessage errorMessage={error.message} />;
	}
	return (
		<Box sx={{ background: '#121212', minHeight: '100vh', px: { xs: 2, md: 6 }, py: 4 }}>
			<Typography variant='h4' sx={{ color: '#fff', fontWeight: 700, mb: 4, letterSpacing: -1 }}>
				New Released Albums
			</Typography>
			{data && data.albums.items.length > 0 ? (
				<Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' }, gap: 4, justifyItems: 'center' }}>
					{data.albums.items.map((album) => (
						<Box
							key={album.id}
							className='album-card'
							sx={{
								'maxWidth': 200,
								'width': '100%',
								'bgcolor': '#181818',
								'borderRadius': 3,
								'boxShadow': '0 4px 24px 0 rgba(0,0,0,0.2)',
								'transition': 'transform 0.2s, background 0.2s',
								'&:hover': {
									transform: 'scale(1.04)',
									bgcolor: '#232323',
								},
								'p': 2,
								'position': 'relative',
								'overflow': 'visible',
							}}
						>
							<Box
								sx={{
									width: '100%',
									aspectRatio: '1 / 1',
									borderRadius: 2,
									overflow: 'hidden',
									mb: 2,
									position: 'relative',
								}}
							>
								<img src={album.images[0].url} alt={album.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px', display: 'block' }} />
								<Box
									sx={{
										'position': 'absolute',
										'right': 12,
										'bottom': 12,
										'opacity': 0,
										'transition': 'opacity 0.2s',
										'zIndex': 2,
										'pointerEvents': 'none',
										'.album-card:hover &': {
											opacity: 1,
											pointerEvents: 'auto',
										},
									}}
								>
									<PlayButton />
								</Box>
							</Box>
							<Typography
								variant='subtitle1'
								sx={{
									color: '#fff',
									fontWeight: 700,
									fontSize: '1rem',
									mb: 0.5,
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									whiteSpace: 'nowrap',
								}}
							>
								{album.name}
							</Typography>
							<Typography
								variant='subtitle2'
								sx={{
									color: '#b3b3b3',
									fontSize: '0.95rem',
									overflow: 'hidden',
									textOverflow: 'ellipsis',
									display: '-webkit-box',
									WebkitLineClamp: 2,
									WebkitBoxOrient: 'vertical',
									whiteSpace: 'normal',
								}}
							>
								{album.artists.map((artist) => artist.name).join(', ')}
							</Typography>
						</Box>
					))}
				</Box>
			) : (
				<Typography variant='h6' sx={{ color: '#b3b3b3' }}>
					No data
				</Typography>
			)}
		</Box>
	);
};

export default NewReleases;
