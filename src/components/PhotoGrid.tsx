import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PhotoGrid: React.FC = () => {
	const [pageNo, setPageNo] = useState<number>(1);
	const [photos, setPhotos] = useState<string[]>([]);
	const [currentIndex, setCurrentIndex] = useState<number>(9);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchPhotos = async (pageNo: number) => {
		setLoading(true);
		try {
			const response = await axios.get(
				`https://api.pexels.com/v1/search?query=people&per_page=50&page=${pageNo}&orientation=square`,
				{
					headers: {
						Authorization:
							'GhTxCKD3X0Yw92kXxK5ZGb6xtbRjeoxxrGO2ybxNk6po805O3eHMJSOb', // Rate limited key as it can only use 200 req per hour need to use other strategy to show images
					},
				}
			);
			setPhotos((prevPhotos) => [
				...prevPhotos,
				...response.data.photos.map(
					(photo: {src: {medium: string}}) => photo.src.medium
				),
			]);
		} catch (error) {
			console.error('Error fetching photos:', error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchPhotos(pageNo);
	}, [pageNo]);

	useEffect(() => {
		const photoRotationInterval = setInterval(() => {
			setCurrentIndex((prevIndex) => {
				const newIndex = prevIndex + 9;
				if (newIndex >= photos.length) {
					setPageNo((prevPage) => prevPage + 1);
				}
				return newIndex;
			});
		}, 10000);

		return () => clearInterval(photoRotationInterval);
	}, [photos.length, currentIndex]);

	const visiblePhotos = photos.slice(currentIndex - 9, currentIndex);

	return (
		<div className="grid grid-cols-3 gap-8 p-6">
			{loading ? (
				<p>Loading...</p>
			) : (
				visiblePhotos.map((photo, index) => (
					<img
						key={index}
						src={photo}
						alt={`Customer-image-${index}`}
						className="w-full h-auto rounded-3xl duration-200 hover:scale-105"
					/>
				))
			)}
		</div>
	);
};

export default PhotoGrid;
