import React from 'react';
import './App.css';
import Stars from './Stars'

function handleClick(movieLink) {

	window.open(movieLink)
}
function FilmItem(props) {
	return (
		<div>
			<li className='film-item' onClick={() => handleClick(props.link)} >
			<span className='film-item-quality'>{props.quality}</span>
			<img className='film-item-cover' src={props.cover} alt={`${props.name} cover`} title={'Le nom de ce film est '+ props.name + ' ,il est créé en '+ props.year+ ' il est un film '+ props.category + 'évalué de '+ props.stars +
			' étoiles et vous pouvez le regardez en qualité '+ props.quality } />
			
			<div>
				<Stars starsValue={props.stars} />
			</div>
		</li> 
		</div>
	)
}

export default FilmItem;

