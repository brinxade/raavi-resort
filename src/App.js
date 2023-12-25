import AppLayout from 'layouts/AppLayout';
import AppHeroLayout from 'layouts/AppHeroLayout';
import BookingPage from 'pages/BookingPage';
import HomePage from 'pages/HomePage';
import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutPage from 'pages/AboutPage';
import ServicesPage from 'pages/ServicesPage';
import CookiePolicyPage from 'pages/CookiePolicyPage';
import PrivacyPolicyPage from 'pages/PrivacyPolicyPage';
import ContactPage from 'pages/ContactPage';
import BlankLayout from 'layouts/BlankLayout';
import ComingSoonPage from 'pages/ComingSoonPage';

function App() {

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div>
			<Routes>
				<Route path="/" element={<BlankLayout><ComingSoonPage/></BlankLayout>}></Route>
			</Routes>
		</div>
	)
}

export default App;
