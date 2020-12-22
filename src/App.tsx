import React, { useEffect } from 'react';
import './App.css';
import Main from './Main';
import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

	useEffect(() => {
		//remove loader
		const loader = document.getElementById('loader-main');
		if(loader){
			loader.classList.add('cont-available');
			setTimeout(() => {
				loader.outerHTML = '';
			}, 2000)
		}
	}, [])

	return (
		<div className="App">
			<Main/>
			<Contact/>
		</div>
	);
}

export default App;
