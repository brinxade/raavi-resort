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

function App() {

	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<div>
			<Routes>
				
				<Route path="/" element={<AppHeroLayout><HomePage/></AppHeroLayout>}></Route>
				<Route path="/booking" element={<AppLayout><BookingPage/></AppLayout>}></Route>
				<Route path="/services" element={<AppLayout><ServicesPage/></AppLayout>}></Route>
				<Route path="/contact" element={<AppLayout><ContactPage/></AppLayout>}></Route>
				<Route path="/about" element={<AppLayout><AboutPage/></AppLayout>}></Route>

				<Route path="/policy/cookies" element={<AppLayout><CookiePolicyPage/></AppLayout>}></Route>
				<Route path="/policy/privacy" element={<AppLayout><PrivacyPolicyPage/></AppLayout>}></Route>

				<Route path="*"><BlankLayout><h1>Error 404</h1></BlankLayout></Route>
			</Routes>
		</div>
	)
}

export default App;
