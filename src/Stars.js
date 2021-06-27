import React from 'react';
import star from './cover/logo-star.jpg'
function Stars({ starsValue}) {
	const range = [1,2,3,4,5]
	const logoStar = <img src={star} alt='star-logo' />

	return (
		<div>
			{range.map((nbStars) =>
				starsValue >= nbStars ? (
					<span key={nbStars.toString()}>{logoStar}</span>
				) : null
			)}
		</div>
	)
}
export default Stars;