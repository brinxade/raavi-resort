import AppLayout from 'layouts/AppLayout';
import AppHeroLayout from 'layouts/AppHeroLayout';
import BookingPage from 'pages/BookingPage';
import HomePage from 'pages/HomePage';
import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ComingSoonPage from 'pages/ComingSoonPage';

function App() {

	return (
		<div>
			<Routes>
				
				<Route path="/" element={<ComingSoonPage/>}></Route>
				
			</Routes>
		</div>
	)
}

export default App;
