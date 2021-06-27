// https://codesandbox.io/embed/react-hooks-search-filter-4gnwc
import React from 'react';
import './App.css';
function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='categories'>
			<select
				value={activeCategory}
				onChange={(e) => setActiveCategory(e.target.value)}
				className='categories-select'
			>
				<option value=''>All</option>
				{categories.map((cat) => (
					<option key={cat} value={cat}>
						{cat}
					</option>
				))}
			</select>
			<button onClick={() => setActiveCategory('')}>Réinitialiser</button>
		</div>
	)
}

export default Categories;