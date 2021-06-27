import React from 'react';
import { useState } from 'react'
import { filmList } from './MoviesList'
import FilmItem from './FilmItem'
import Categories from './Filter'
import './App.css';
function WatchingList() {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = filmList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)
	return (
		<div className='watching-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='film-list'>
				{filmList.map(({ cover, name, stars, quality, category, desc, year,link }) =>
					!activeCategory || activeCategory === category ? (
						<div key={name}>
							<FilmItem
								cover={cover}
								name={name}
								stars={stars}
								quality={quality}
                                desc={desc}
                                year={year}
                                category={category}
                                link={link}
							/>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default WatchingList;