import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CardDetail.css';

export default function CardDetail({ heroes }) {
	const { heroId } = useParams();
	const heroImage = heroes[heroId - 1].img;
	const heroImgRef = useRef();
	const [heightAdjuster, setHeightAdjuster] = useState();
	const [matches, setMatches] = useState([]);
	const [imageLoaded, setImageLoaded] = useState(false);
	function updateSize() {
		setHeightAdjuster({
			height: `calc(100vh - 260px - 2rem - ${heroImgRef.current?.height}px)`,
		});
	}
	useEffect(() => {
		fetch('https://api.opendota.com/api/heroes/' + heroId + '/matches')
			.then((response) => response.json())
			.then((data) => {
				setMatches(data);
			});
	}, [heroId]);
	useEffect(() => {
		updateSize(heroImgRef.current?.height);
		window.addEventListener('resize', updateSize);
		return () => window.removeEventListener('resize', updateSize);
	}, [imageLoaded]);
	return (
		<div className="card-detail-container">
			<img
				onLoad={() => setImageLoaded(true)}
				ref={heroImgRef}
				src={heroImage}
				alt=""
			/>
			{imageLoaded ? (
				<div className="match-details-wrap" style={heightAdjuster}>
					{matches.map((match, idx) => {
						return (
							<div className="match-detail" key={idx}>
								{Object.entries(match).map(([key, value], idx) => {
									return (
										<p key={idx}>
											"{key}":{' '}
											<span>
												{value
													? `${idx !== 5 ? value : `"${value}"`} `
													: 'false'}
												,
											</span>
										</p>
									);
								})}
							</div>
						);
					})}
				</div>
			) : null}
		</div>
	);
}
