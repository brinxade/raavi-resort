import AppLayout from 'layouts/AppLayout';
import AppHeroLayout from 'layouts/AppHeroLayout';
import BookingPage from 'pages/BookingPage';
import HomePage from 'pages/HomePage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<AppHeroLayout><HomePage/></AppHeroLayout>}></Route>
				<Route path="/booking" element={<AppLayout><BookingPage/></AppLayout>}></Route>
			</Routes>
		</div>
	)
}

export default App;
