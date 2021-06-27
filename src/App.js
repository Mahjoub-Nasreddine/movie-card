import React from 'react';
import Banner from './Banner'
import Footer from './Footer'
import WatchingList from './WatchingList'
import './App.css';

function App() {
	
	return (
		<div className='body-page'>
			<Banner />
			<div className='layout-inner'>
				<WatchingList />
			</div>
			<Footer />
		</div>
	)
}

export default App;